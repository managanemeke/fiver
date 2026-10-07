set shell := ["bash", "-c"]

default: serve

serve:
  deno run -RN jsr:@std/http/file-server

