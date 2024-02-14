---
title: Shared exfat drive for dual boot
subtitle: Subtitle test 123
thumbnail: /assets/visard.png
date: 11 February 2024
---

# Shared exfat drive for dual boot

Setup:

1. Windows partition (`ntfs`)
2. Linux partition (`ext4`/`btrfs`)
3. **Shared partition** (`exfat`)

Good to know:

-   `exfat` does not support user permissions, so `chown` and similar commands will not work
-   Windows likes to take ownership of the partition if it's mounted. There are several reasons it happens:
    -   Windows has **fast boot** option enabled (prevents complete hard drive shutdown);
    -   Windows' shutdown button does not truly shutdown the system (this can be solved by shift-clicking shutdown button in the start menu)

## Mounting `exfat` on boot

In Linux, it is configured in `/etc/fstab` file. Its structure looks like this:

```
UUID  mountpoint  fs-type  fs-options  ?  ?
```

(TODO: explain last two columns of the config file)

It is a good practice to mount filesystems either in `/mnt/*` or in `/media/*` directories.

## Filesystem mount options

Very often `defaults` option is enough for the partition to just work. The specific default settings vary across different hardware or filesystems, however for exfat it should be similar to `rw,relatime,fmask=0022,dmask=0022,iocharset=utf8,errors=remount-ro`.

Explanation for above values:

-   `rw`: Read-write permissions set for a filesystem
-   `relatime`: TODO
-   `fmask`: File-mask - apply permissions `0755` to all files in the mounted partition
-   `dmask`: Directory-mask - apply permissions `0755` to all directories in the mounted partition
-   `iocharset`: What charset the fs should use (`utf8` strongly recommended)
-   `errors`: Specifies behavior when partition fails to mount. In this instance it will attempt to mount it again with read-only permissions

## Read-write permissions issue

Even though `rw` is by default specified in the `fs-options` in `/etc/fstab`, it very often is not applied to a regular user. It happens because of the `fmask=0022,dmask=0022` options, which disable write permissions.

To fix this issue, `fs-options` have to be corrected with:

-   `uid=1000`: Set permissions for a user with id `1000` (default for fresh systems) as well
-   `gid=1000`: Set permissions for a group with id `1000`
-   `umask=0000`: Set `fmask` and `dmask` to `0000` (`0777` permissions in the filesystem). This is crucial in order to override the `defaults` and enable write permissions
-   `nofail`: (OPTIONAL) continue booting when mounting of this filesystem fails - helps with fiddling on `fstab`since without this option, incorrect config will prevent the system to boot

The final entry in `/etc/fstab` should look like this:

```
<UUID>  /mnt/<name>  exfat  defaults,uid=1000,gid=1000,umask=0000,nofail 0 0
```

# Validating `/etc/fstab` config

The easiest way is to unmount (if mounted incorrectly) the target filesystem and re-mount it again:

```bash
sudo umount /mnt/<name>
sudo mount -a
```

Alternative to `mount -a` is `mount -fav`, which fakes the mount (does not execute the system call).

After that, check if the filesystem under `/mnt/<name>` exists and has correct permissions.

Another way to check the config file is:

```bash
sudo findmnt --verify --verbose
```

After mounting, a new entry in `/etc/mtab` should appear with listed information about the filesystem and mount options:

```bash
cat /etc/mtab | grep /mnt/<name>
```

This way we can check whether all `fs-options` are respected.

## Sources

-   https://askubuntu.com/questions/429848/dmask-and-fmask-mount-options
-   https://man.archlinux.org/man/fstab.5#DESCRIPTION
-   https://askubuntu.com/questions/1454000/cant-add-write-permissions-to-mounted-exfat-hard-drive
-   https://serverfault.com/questions/174181/how-do-you-validate-fstab-without-rebooting

## Testing

## VERY LONG TO WRITE HEADER WHICH SHOULD OVERFLOWWWWWWWWWWWWWW

## VERY LONG TO WRITE HEADER WHICH SHOULD OVERFLOWWWWWWWWW

## VERY LONG TO WRITE HEADER WHICH SHOULD OVERFLOWWWWWWWWI

## VERY LONG TO WRITE HEADER WHICH SHOULD OVERFLOWWWWWWWWII

## Headers with the same name

## Headers with the same name

## Headers with the same name

### Tables

| one            | two               | three |
| -------------- | ----------------- | ----- |
| something wild | 2                 | 3     |
| 1              | truly exceptional | 3     |
| 1              | 2                 | 3     |

### Bolds, italics

**This is bold.** Compared to normal.

_This is italic._ Compared to normal.

### Block quotes

> Single-line quote

> Multi-line
> quote

> Multi-level
> Multi-line
>
> > quote blocks
> > with many lines
> >
> > > Even third level
> > > Let's go

### Ordered lists, unordered lists

1. one
2. two
3. three
    1. multi-level
    2. three two

-   one
-   two
-   three
    -   multi-level
    -   three two

### Inline code, code blocks

Normal text.

Normal text with `code` in the middle.

```
Code block.
Multiline!
```

```c++
// Code block with C++
#include <iostream>

int main(void)
{
    int b = 3;
    std::cout << b << std::endl;
    return 0;
}
```

### Horizontal rule

Some text.

---

Some more text.

### Links

[Link with title](https://www.google.com)

[Link to the same site](/about)

A text that looks like a URL: https://www.google.com

Another: www.google.com

And another: google.com

### Images

![Alternative text](/assets/monoshot.png)

### Footnotes

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

Some other text.

### Heading with custom ID

#### This heading has id `ble` {#ble}

### Definition list

term
: definition

### Strikethrough

~~This text is striked~~

### Task list

-   [ ] Task numero uno
-   [ ] Task numero dos
-   [x] Top cinco tasks
-   [-] Not completed task
    -   [ ] Task in a task

### Emoji

This is so unfunny! :joy: , :puke:

### Highlight

This is ==very highlighted==.

### Subscript and superscript

This will be subscripted: H~2~O

And this is superscripted: X^2^

### Inline math, math blocks and TeX

This is some funky level math: `h`:$(\Z_2)^7 \rightarrow (\Z_2)^4$.

And this is how math block looks like:

$$
A =
\begin{pmatrix}
1 & 0 & 0 & 0 \\\
1 & 1 & 0 & 0 \\\
1 & 1 & 1 & 0 \\\
1 & 1 & 1 & 1 \\\
0 & 1 & 1 & 1 \\\
0 & 0 & 1 & 1 \\\
0 & 0 & 0 & 1
\end{pmatrix}
$$

### Comments

Comments are not usually supported, hovewer the below text is a comment (should not be visible on the page):

[Comment details, write something funny here.]: #

### Admonitions

These are special quote blocks that have various coloring. Taken from GitHub:

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

### Symbols

- Copyright (©) — &copy;
-   Registered trademark (®) — &reg;
-   Trademark (™) — &trade;
-   Euro (€) — &euro;
-   Left arrow (←) — &larr;
-   Up arrow (↑) — &uarr;
-   Right arrow (→) — &rarr;
-   Down arrow (↓) — &darr;
-   Degree (°) — &#176;
-   Pi (π) — &#960;

### Plain HTML

<a href="https://www.google.com" target="_blank">Google link</a>

### Videos

YouTube embedded:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/n2iORd5AKLQ?si=M53ZRg46ltV-XITg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Badges

[![Build](https://github.com/allegro-agh-2023/gr2_hotel_room_reservations/actions/workflows/master-build.yml/badge.svg)](https://github.com/allegro-agh-2023/gr2_hotel_room_reservations/actions/workflows/master-build.yml)
[![Tests](https://github.com/allegro-agh-2023/gr2_hotel_room_reservations/actions/workflows/master-test.yml/badge.svg)](https://github.com/allegro-agh-2023/gr2_hotel_room_reservations/actions/workflows/master-test.yml)
![Deprecated](https://img.shields.io/badge/deprecated-red?style=flat-square)
![GitLab CI](https://img.shields.io/badge/GitLab%20CI-%23181717.svg?style=flat-square&logo=gitlab&logoColor=white)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/pydocstyle-gitlab-code-quality?style=flat-square)
[![PyPI - License](https://img.shields.io/pypi/l/pydocstyle-gitlab-code-quality?style=flat-square)](LICENSE.md)
[![PyPI](https://img.shields.io/pypi/v/pydocstyle-gitlab-code-quality?style=flat-square)](https://pypi.org/project/pydocstyle-gitlab-code-quality/)
![PyPI - Downloads](https://img.shields.io/pypi/dm/pydocstyle-gitlab-code-quality?style=flat-square)

### Abbreviations

*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium

The HTML specification is maintained by the W3C.
