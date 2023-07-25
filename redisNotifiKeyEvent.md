# Set up

##### Step 1

Mở Redis-cli => `config set notify-keyspace-events Ex`

##### Step 2

Dùng `pSubscribe` lắng nghe sự kiện hết hạn của 1 key `__keyevent@0__:expired`

##### Flow

> Mỗi khi có 1 key hết hạn thì redis sẽ gửi 1 notify event expired
> Nó sẽ publish 1 message đến channel có pattern: `__keyevent@0__:expired`
> Subscribe đến channel này sẽ nhận được message (payload)

##### Use Case

> Tính năng hủy đơn hàng sau N phút khi người dùng không tiến hàng thanh toán

##### explain

> Khi người dùng đặt hàng thành công thì sẽ set thời gian (x time) chờ thanh toán cho đơn hàng đó vào redis, thì sau khoảng thời gian (x time) này. Nếu người dùng chưa thanh toán đơn hàng thì Key sẽ hết hạn, 1 notifi expired sẽ được gửi đến channel `__keyevent@0__:expired`, service subscribe channel này sẽ lấy được payload và tiến hành hủy đơn hàng
