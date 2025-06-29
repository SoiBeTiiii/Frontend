"use client";

import styles from "./products.module.css";
import ProductCard from "../components/ProductCard";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../lib/productApi";
import ProductCardProps from "../interface/ProductCardProps";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");

  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [sort, setSort] = useState<string>("");
  const [brands, setBrands] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [typeSkin, setTypeSkin] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts({
      sort,
      brands,
      types,
      type_skin: typeSkin,
      price_range: priceRange,
      keyword: keyword ?? undefined,
    })
      .then(setProducts)
      .catch((err) => {
        console.error("Lỗi khi fetch sản phẩm:", err);
      });
  }, [sort, brands, types, typeSkin, priceRange, keyword]);

  const handleCheckboxChange = (
    value: string,
    stateArray: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const brandOptions = [
    { id: "1", name: "OHUI" },
    { id: "2", name: "WHOO" },
    { id: "3", name: "SUM37" },
    { id: "4", name: "SULWHASOO" },
    { id: "5", name: "CNP" },
  ];

  const typeOptions = [
    { id: "1", name: "Áo Thun nam" },
    { id: "2", name: "Tinh chất" },
    { id: "3", name: "Trang điểm" },
    { id: "4", name: "Kem dưỡng" },
    { id: "5", name: "Sữa rửa mặt" },
  ];

  const skinOptions = [
    "Da hỗn hợp",
    "da dầu",
    "Da lão hóa",
    "Da nám/tàn nhang",
  ];

  return (
    <section className={styles["product-page"]}>
      <aside className={styles["filter-sidebar"]}>
        {/* Thương hiệu */}
        <div className={styles["filter-section"]}>
          <h2 className={styles["filter-title"]}>Thương hiệu</h2>
          {brandOptions.map((brand) => (
            <label key={brand.id}>
              <input
                type="checkbox"
                checked={brands.includes(brand.id)}
                onChange={() =>
                  handleCheckboxChange(brand.id, brands, setBrands)
                }
              />
              {brand.name}
            </label>
          ))}
        </div>

        {/* Mức giá */}
        <div className={styles["filter-section"]}>
          <h2 className={styles["filter-title"]}>Mức giá</h2>
          {[
            "0-500000",
            "500000-1000000",
            "1000000-2000000",
            "2000000-5000000",
            "10000000-99999999",
          ].map((range) => (
            <label key={range}>
              <input
                type="checkbox"
                checked={priceRange.includes(range)}
                onChange={() =>
                  handleCheckboxChange(range, priceRange, setPriceRange)
                }
              />
              {range.replace("-", "đ - ")}đ
            </label>
          ))}
        </div>

        {/* Loại sản phẩm */}
        <div className={styles["filter-section"]}>
          <h2 className={styles["filter-title"]}>Loại</h2>
          {typeOptions.map((type) => (
            <label key={type.id}>
              <input
                type="checkbox"
                checked={types.includes(type.name)}
                onChange={() =>
                  handleCheckboxChange(type.name, types, setTypes)
                }
              />
              {type.name}
            </label>
          ))}
        </div>

        {/* Loại da */}
        <div className={styles["filter-section"]}>
          <h2 className={styles["filter-title"]}>Loại da</h2>
          {skinOptions.map((skin) => (
            <label key={skin}>
              <input
                type="checkbox"
                checked={typeSkin.includes(skin)}
                onChange={() =>
                  handleCheckboxChange(skin, typeSkin, setTypeSkin)
                }
              />
              {skin}
            </label>
          ))}
        </div>
      </aside>

      <section className={styles["product-list"]}>
        <h2 className={styles["section-title"]}>Tất cả sản phẩm</h2>
        <div className={styles["sort-options"]}>
          <span className={styles["sort-label"]}>Sắp xếp:</span>
          {[
            ["a-z", "Tên A → Z"],
            ["z-a", "Tên Z → A"],
            ["price_asc", "Giá tăng dần"],
            ["price_desc", "Giá giảm dần"],
            ["new", "Hàng mới"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSort(key)}
              className={`${styles["sort-btn"]} ${
                sort === key ? styles.active : ""
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={styles["product-grid"]}>
          {products.map((product) => (
            <ProductCard
              key={product.id} // ✅ Dùng key là id
              {...product}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
