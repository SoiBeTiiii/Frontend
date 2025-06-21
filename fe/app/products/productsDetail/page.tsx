'use client';
import styles from "./productDetail.module.css";
import ProductCard from "../../components/ProductCard";
import React from "react";

export default function ProductDetailPage() {
    const products = new Array(5).fill(0).map((_, i) => ({
        name: 'Kem Tẩy Trang Whoo Gongjinhyang Facial Cream Cleanser 210ml ...',
        price: 650000,
        originalPrice: 880000,
        image: '../images/prop.webp',
        sold: 30,
        discount: 57,
    }));
    return (
        <>
            <section className={styles["product-detail"]}>
                <div className={styles["product-images"]}>
                    <img src="https://placehold.co/400x400" alt="Sản phẩm chính" />
                    <div className={styles["thumbnail-list"]}>
                        <img src="https://placehold.co/80x80" alt="thumb 1" />
                        <img src="https://placehold.co/80x80" alt="thumb 2" />
                        <img src="https://placehold.co/80x80" alt="thumb 3" />
                    </div>
                </div>

                <div className={styles["product-info"]}>
                    <h1>Bộ kem chống nắng dưỡng trắng Whoo Gongjinhyang Seol Radiant White Tone Up Sunscreen</h1>
                    <div className={styles["product-price"]}>890.000₫</div>
                    <div className={styles["product-meta"]}>Mã SP: 570377721</div>

                    <div className={styles["variant-select"]}>
                        <label htmlFor="quantity">Số lượng:</label>
                        <select id="quantity">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <div className={styles["variant-select"]}>
                        <button className={styles["btn-buy-now"]}>Mua ngay</button>
                        <button className={styles["btn-add-cart"]}>Thêm vào giỏ</button>
                    </div>

                    <div className={styles["payment-icons"]}>
                        <img src="https://placehold.co/40x24" alt="Visa" />
                        <img src="https://placehold.co/40x24" alt="MasterCard" />
                        <img src="https://placehold.co/40x24" alt="VNPay" />
                    </div>

                    <ul className={styles["product-meta"]}>
                        <li>Giao hàng 24h nội thành</li>
                        <li>Miễn phí đơn từ 199K</li>
                        <li>Cam kết chính hãng</li>
                    </ul>
                </div>
            </section>

            <section className={styles["product-tabs"]}>
                <div className={styles["tab-title"]}>Mô tả sản phẩm</div>
                <div className={styles["product-description"]}>
                    <p><strong>Bộ kem chống nắng dưỡng trắng Whoo Gongjinhyang Seol Radiant White Tone Up Sunscreen Special
                        Set</strong> giúp bảo vệ kép, làm trắng và sáng da.</p>
                    <img src="https://placehold.co/700x350" alt="Chi tiết sản phẩm" />
                    <ul>
                        <li>Chống nắng cao</li>
                        <li>Làm sáng da</li>
                        <li>Làm sạch nhẹ trang điểm</li>
                    </ul>
                    <p>Set bao gồm:<br />
                        - 1 Kem chống nắng dưỡng trắng 35ml<br />
                        - 1 Sữa rửa mặt dưỡng trắng 40ml<br />
                        - 1 Nước hoa hồng dưỡng trắng 20ml<br />
                        - 1 Sữa dưỡng trắng da 20ml
                    </p>
                </div>
            </section>

            <section className={styles["related-products"]}>
                <h2>Sản phẩm cùng loại</h2>
                <div className={styles["related-grid"]}>
                    {products.map((product, idx) => (
                        <ProductCard
                            key={idx}
                            name={product.name}
                            price={product.price}
                            originalPrice={product.originalPrice}
                            image={product.image}
                            sold={product.sold}
                            discount={product.discount}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}


