// app/checkout/page.tsx
import styles from './checkout.module.css';

export default function CheckoutPage() {
  return (
    <div className={styles.checkoutContainer}>
      <h1>Thông tin thanh toán</h1>

      <div className={styles.grid}>
        {/* LEFT */}
        <div className={styles.left}>
          {/* Người mua */}
          <section className={styles.section}>
            <h2>
              Thông tin người mua hàng{" "}
              <span className={styles.loginPrompt}>Đăng nhập nhanh</span>
            </h2>
            <div className={styles.row}>
              <input className={styles.input} type="text" placeholder="Tên" />
              <input className={styles.input} type="text" placeholder="Họ" />
            </div>
            <div className={styles.row}>
              <input className={styles.input} type="text" placeholder="+84" />
              <input className={styles.input} type="email" placeholder="Email" />
            </div>
          </section>

          {/* Nhận hàng */}
          <section className={styles.section}>
            <h2>Thông tin nhận hàng</h2>
            <div className={styles.row}>
              <select className={styles.select}>
                <option>Tỉnh/Thành phố</option>
              </select>
              <select className={styles.select}>
                <option>Quận/Huyện</option>
              </select>
              <select className={styles.select}>
                <option>Phường/Xã</option>
              </select>
            </div>
            <input
              className={styles.input}
              type="text"
              placeholder="Địa chỉ cụ thể"
            />
            <label className={styles.checkbox}>
              <input type="checkbox" />
              Tạo tài khoản với thông tin này
            </label>
          </section>

          {/* Thanh toán */}
          <section className={styles.section}>
            <h2>Phương thức thanh toán</h2>
            <div className={styles.paymentMethods}>
              <label>
                <input type="radio" name="payment" defaultChecked /> Trả tiền mặt
                khi nhận hàng (COD)
              </label>
              <label>
                <input type="radio" name="payment" /> ZaloPay
              </label>
              <label>
                <input type="radio" name="payment" /> ATM/Visa/QR Pay
              </label>
              <label>
                <input type="radio" name="payment" /> Ví MoMo
              </label>
              <label>
                <input type="radio" name="payment" /> Fundiin - Mua trước trả sau
              </label>
            </div>
          </section>

          {/* Vận chuyển */}
          <section className={styles.section}>
            <h2>Phương thức vận chuyển</h2>
            <label>
              <input type="radio" name="shipping" defaultChecked /> Giao hàng tiêu
              chuẩn (1-3 ngày)
            </label>
            <label>
              <input type="radio" name="shipping" /> Giao hàng trong 2h
            </label>
            <label>
              <input type="radio" name="shipping" /> Giao hàng trong 4h
            </label>
          </section>

          {/* Ghi chú */}
          <section className={styles.section}>
            <h2>Ghi chú</h2>
            <textarea className={styles.textarea} placeholder="Ghi chú" />
          </section>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.summaryBox}>
            <p>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
            <hr />
            <p>
              Tổng giá trị đơn hàng: <strong>0 đ</strong>
            </p>
            <p>
              Giảm giá: <strong>0 đ</strong>
            </p>
            <p>
              Tiền ship: <strong>0 đ</strong>
            </p>
            <p>
              Tổng (đã bao gồm VAT): <strong>0 đ</strong>
            </p>
            <button className={styles.placeOrderBtn}>ĐẶT HÀNG</button>
          </div>
          <div className={styles.voucher}>
            <input
              className={styles.input}
              type="text"
              placeholder="Nhập mã giảm giá"
            />
            <button>Áp dụng</button>
          </div>
        </div>
      </div>
    </div>
  );
}
