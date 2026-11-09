import os
import subprocess
from concurrent.futures import ProcessPoolExecutor
from pathlib import Path
import time

ROOT = Path(__file__).resolve().parent.parent
SRC_BASE = ROOT / 'product tab frames'
DEST_BASE = ROOT / 'public' / 'product_animations'

TARGETS = [
    ('Bellows_Cover_500_frames/Bellows_Cover', 'Bellows_Cover', 640, 360, 72),
    ('Industrial_Safety_Enclosure_Cabinet_500_frames/Industrial_Safety_Enclosure_Cabinet', 'Industrial_Safety_Enclosure_Cabinet', 640, 360, 72),
    ('Final_500_frames/Final', 'Final', 960, 540, 68),
    ('Precision_Linear_Guide_Assemblies_500_frames/Precision_Linear_Guide_Assemblies', 'Precision_Linear_Guide_Assemblies', 640, 360, 72),
    ('Stainless_Steel_Accordion_Roller_Guard_500_frames/Stainless_Steel_Accordion_Roller_Guard', 'Stainless_Steel_Accordion_Roller_Guard', 640, 360, 72),
    ('Telescopic_Steel_Machine_Cover_500_frames/Telescopic_Steel_Machine_Cover', 'Telescopic_Steel_Machine_Cover', 640, 360, 72),
    ('Telescoping_Steel_Way_Cover_on_Blue_500_frames/Telescoping_Steel_Way_Cover_on_Blue', 'Telescoping_Steel_Way_Cover_on_Blue', 640, 360, 72),
]

def convert_frame(args):
    src_file, dst_file, w, h, q = args
    if dst_file.exists() and dst_file.stat().st_size > 0:
        return
    cmd = [
        'ffmpeg', '-y', '-v', 'error',
        '-i', str(src_file),
        '-vf', f'scale={w}:{h}',
        '-q:v', str(q),
        str(dst_file)
    ]
    subprocess.run(cmd, check=True)

def main():
    start = time.time()
    tasks = []
    for src_rel, dst_rel, w, h, q in TARGETS:
        src_dir = SRC_BASE / src_rel
        dst_dir = DEST_BASE / dst_rel
        dst_dir.mkdir(parents=True, exist_ok=True)
        
        for img_name in sorted(os.listdir(src_dir)):
            if not img_name.endswith('.jpg'):
                continue
            src_file = src_dir / img_name
            dst_name = Path(img_name).stem + '.webp'
            dst_file = dst_dir / dst_name
            tasks.append((src_file, dst_file, w, h, q))

    print(f'Queued {len(tasks)} frames for conversion...')
    max_workers = os.cpu_count() or 8
    with ProcessPoolExecutor(max_workers=max_workers) as executor:
        list(executor.map(convert_frame, tasks))

    elapsed = time.time() - start
    print(f'Conversion completed in {elapsed:.1f}s.')

if __name__ == '__main__':
    main()
