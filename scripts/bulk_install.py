import sys
import textwrap
import subprocess

print(
    textwrap.dedent(
        """\
        ============================================================
                            PAX Bulk Installer
        ============================================================

        Enter mod urls, one per line.
        Hit Ctrl+D (EOF) when done.

        Start:
        """
    )
)

mod_urls = sys.stdin.read().splitlines()

for mod_url in mod_urls:
    proc = subprocess.run(["pax", "add", '-y', mod_url], capture_output=True)

    if proc.returncode != 0:
        print(proc.stdout.decode("utf-8"))
        print(proc.stderr.decode("utf-8"))
        print("Error installing mod: " + mod_url)
        sys.exit(1)
    else:
        print("Installed mod: " + mod_url)
        print(proc.stdout.decode("utf-8"))
