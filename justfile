set shell := ["bash", "-c"]

default: serve

serve:
  deno run -RN jsr:@std/http/file-server

test:
  #!/usr/bin/env bash
  set -euo pipefail
  for directory in features/*/; do
    (cd $directory && just test)
  done

