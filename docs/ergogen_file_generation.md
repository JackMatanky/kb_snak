# Ergogen File Generation Command

Before running the commands below, clone the GitHub [Ergogen repository](https://github.com/ergogen/ergogen) and follow the [usage steps](https://docs.ergogen.xyz/usage).

The basic command syntax: `node src/cli.js input.yaml -o output_folder`

If the Ergogen and the config file directories do not share the same directory add the relative paths.

The two command-line options for generating Ergogen files based on current directory:

1. kn_snak:

```node
node D:\keyboard_dev\ergogen\src\cli.js v1_nice_nano_view\01_input\config.yaml -o v1_nice_nano_view\02_output

node D:\keyboard_dev\ergogen\src\cli.js v2_xiao\01_input\config.yaml -o v2_xiao\02_output
```

2. keyboard_dev

2.1 Nice!Nano

```node
node ergogen\src\cli.js kb_snak\30_nice_nano_view\01_input\config.yaml -o kb_snak\30_nice_nano_view\02_output

node ergogen\src\cli.js kb_snak\34_nice_nano_view\01_input\config.yaml -o kb_snak\34_nice_nano_view\02_output
```

2.2 Xiao

```node
node ergogen\src\cli.js kb_snak\xiao_30\01_input\config.yaml -o kb_snak\xiao_30\02_output

node ergogen\src\cli.js kb_snak\xiao_34\01_input\config.yaml -o kb_snak\xiao_34\02_output
```