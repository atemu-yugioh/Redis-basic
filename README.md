# Redis-basic

You can listen to the key-space notification:

config set notify-keyspace-events Kx

`psubscribe __keyspace@0__:foo_bar_*`

When foo_bar_1 expires, you'll get the corresponding message:

> 1. "pmessage"
> 2. "**keyspace@0**:foo*bar*\*"
> 3. "**keyspace@0**:foo_bar_1"
> 4. "expired"
