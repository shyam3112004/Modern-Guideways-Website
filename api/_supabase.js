/**
 * Supabase Client Helper for Modern Guideways
 * Zero external npm dependencies — uses Node.js native fetch
 * Compatible with Vercel Serverless Functions & local Node environments
 */

export function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL || '';
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';
  const cleanUrl = url.replace(/\/+$/, '');
  return {
    url: cleanUrl,
    key,
    isConfigured: Boolean(cleanUrl && key)
  };
}

/**
 * Verify user JWT token with Supabase Auth
 */
export async function verifySupabaseToken(token) {
  const { url, key, isConfigured } = getSupabaseConfig();
  if (!isConfigured || !token) return null;

  try {
    const res = await fetch(`${url}/auth/v1/user`, {
      headers: {
        'apikey': key,
        'Authorization': `Bearer ${token}`
      }
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.error('[Supabase Auth] Verification failed:', err.message);
  }
  return null;
}

/**
 * Execute query against Supabase PostgREST API
 */
export async function supabaseRequest(endpoint, { method = 'GET', body = null, headers = {} } = {}) {
  const { url, key, isConfigured } = getSupabaseConfig();
  if (!isConfigured) return null;

  const targetUrl = `${url}/rest/v1/${endpoint.replace(/^\/+/, '')}`;
  const reqHeaders = {
    'apikey': key,
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation',
    ...headers
  };

  const res = await fetch(targetUrl, {
    method,
    headers: reqHeaders,
    body: body ? JSON.stringify(body) : undefined
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Supabase request failed [${res.status}]: ${errorText}`);
  }

  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch (_) {
    return text;
  }
}

/**
 * Fetch site content from Supabase
 */
export async function getSupabaseContent() {
  try {
    const rows = await supabaseRequest('site_content?key=eq.main&select=data,updated_at');
    if (rows && rows.length > 0 && rows[0].data) {
      return rows[0].data;
    }
    return null;
  } catch (err) {
    console.error('[Supabase] Failed to fetch content:', err.message);
    return null;
  }
}

/**
 * Save site content to Supabase
 */
export async function saveSupabaseContent(content) {
  const { isConfigured } = getSupabaseConfig();
  if (!isConfigured) return false;

  await supabaseRequest('site_content', {
    method: 'POST',
    headers: {
      'Prefer': 'resolution=merge-duplicates,return=representation'
    },
    body: {
      key: 'main',
      data: content,
      updated_at: new Date().toISOString()
    }
  });
  return true;
}

/**
 * Fetch all enquiries from Supabase
 */
export async function getSupabaseEnquiries() {
  try {
    const rows = await supabaseRequest('enquiries?select=*&order=created_at.desc');
    if (Array.isArray(rows)) {
      return rows.map(r => ({
        id: r.id,
        name: r.name,
        company: r.company || '',
        phone: r.phone || '',
        email: r.email || '',
        machineType: r.machine_type || '',
        protectionType: r.protection_type || '',
        stroke: r.stroke || '',
        notes: r.notes || '',
        status: r.status || 'NEW',
        receivedAt: r.created_at || r.received_at,
        timestamp: r.created_at || r.received_at
      }));
    }
    return null;
  } catch (err) {
    console.error('[Supabase] Failed to fetch enquiries:', err.message);
    return null;
  }
}

/**
 * Save an enquiry to Supabase
 */
export async function insertSupabaseEnquiry(enquiry) {
  const { isConfigured } = getSupabaseConfig();
  if (!isConfigured) return false;

  const payload = {
    id: enquiry.id || ('ENQ-' + Date.now()),
    name: enquiry.name,
    company: enquiry.company || '',
    phone: enquiry.phone || '',
    email: enquiry.email || '',
    machine_type: enquiry.machineType || enquiry.machine_type || '',
    protection_type: enquiry.protectionType || enquiry.protection_type || '',
    stroke: enquiry.stroke || '',
    notes: enquiry.notes || '',
    status: enquiry.status || 'NEW',
    created_at: enquiry.receivedAt || new Date().toISOString(),
    raw_payload: enquiry
  };

  await supabaseRequest('enquiries', {
    method: 'POST',
    headers: {
      'Prefer': 'return=representation'
    },
    body: payload
  });
  return true;
}

/**
 * Upload file to Supabase Storage bucket ('media')
 */
export async function uploadToSupabaseStorage(bucketName, filePath, buffer, contentType) {
  const { url, key, isConfigured } = getSupabaseConfig();
  if (!isConfigured) return null;

  const uploadUrl = `${url}/storage/v1/object/${bucketName}/${filePath}`;
  const res = await fetch(uploadUrl, {
    method: 'POST',
    headers: {
      'apikey': key,
      'Authorization': `Bearer ${key}`,
      'Content-Type': contentType || 'application/octet-stream',
      'x-upsert': 'true'
    },
    body: buffer
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Supabase Storage upload failed [${res.status}]: ${errorText}`);
  }

  // Return public CDN URL
  return `${url}/storage/v1/object/public/${bucketName}/${filePath}`;
}
