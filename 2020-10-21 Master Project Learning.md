---
layout: post
title: Learning Pytorch Code and Independent RNN
date: 2020-10-21 18:18:23 +0900
category: Pytorch
---

# How to read Pytorch Code from the beginning

## Tensorflow Function

Tf.app.run：会检测程序中有没有 def main(),从该处开始执行。

```python
if __NAME__ =="__main__":
  tf.app.run
```

means current file is executed under a shell instead of imported as a module. If it is used as a module, then tf.app.run则不会启动。

Source Code:

```python
def run(main=None, argv=None):
  """Runs the program with an optional 'main' function and 'argv' list."""
  f = flags.FLAGS

  # Extract the args from the optional `argv` list.
  args = argv[1:] if argv else None

  # Parse the known flags from that list, or from the command
  # line otherwise.
  # pylint: disable=protected-access
  flags_passthrough = f._parse_flags(args=args)
  # pylint: enable=protected-access

  main = main or sys.modules['__main__'].main

  # Call the main function, passing through any arguments
  # to the final program.
  sys.exit(main(sys.argv[:1] + flags_passthrough))
```

由于调用了argparse module，Python才可以处理乱七八糟的输入arguments

在这段源代码中，它call了其他地方的main (input argument)，或者本程序sys.modules的main。





