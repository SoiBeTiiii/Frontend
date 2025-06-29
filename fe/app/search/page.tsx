"use client";
import { useRouter } from "next/navigation";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import baseAxios from "../../lib/baseAxios";
import ProductCard from "..//components/ProductCard";
import ProductCardProps from "../interface/ProductCardProps";

export default function SearchPage() {
  const [results, setResults] = useState<ProductCardProps[]>([]);
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");

  useEffect(() => {
    if (!keyword) return;

    const fetchSearchResults = async () => {
      try {
        const res = await baseAxios.get(`/search?keyword=${keyword}`);
        const data = res.data as { data: ProductCardProps[] };
        setResults(data.data); // sửa nếu API trả về khác
      } catch (err) {
        console.error("Lỗi tìm kiếm:", err);
      }
    };

    fetchSearchResults();
  }, [keyword]);

  return (
    <div>
      <h2>Kết quả cho: {keyword}</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {results.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
