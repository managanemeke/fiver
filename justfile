set shell := ["nu", "-c"]

default: serve

serve:
  deno run -RN jsr:@std/http/file-server

test:
  #!/usr/bin/env nu
  ls features/*/ | get name | each {|directory|
    cd $directory
    just test
  }

