"use client";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/data/products";
import FeaturedProductCard from "./FeaturedProductCard";
import ShopSearch from "./ShopSearch";
import CategoryFilter from "./CategoryFilter";
import SortDropdown from "./SortDropdown";
import Pagination from "./Pagination";
import EmptyState from "./EmptyState";
import ActiveFilters from "./ActiveFilters";

type ShopCatalogProps = {
  products: Product[];
};

export default function ShopCatalog({
  products,
}: ShopCatalogProps) {
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  // Read category/sort from the URL once on load (e.g. from navbar dropdown links)
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setCategory(categoryParam);
    }

    const viewParam = searchParams.get("view");
    if (viewParam === "lookbook") {
      setSort("rating"); // show best-rated items first for "lookbook" browsing
    }
  }, [searchParams]);

  // Filter & Sort Products
  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });

    switch (sort) {
      case "price-low":
        return [...result].sort((a, b) => a.price - b.price);

      case "price-high":
        return [...result].sort((a, b) => b.price - a.price);

      case "rating":
        return [...result].sort((a, b) => b.rating - a.rating);

      case "name":
        return [...result].sort((a, b) =>
          a.name.localeCompare(b.name)
        );

      default:
        return result;
    }
  }, [products, search, category, sort]);

  // Pagination
  const PRODUCTS_PER_PAGE = 8;

  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <>
      <div className="mb-10 flex flex-col gap-8">
        <div className="flex items-center justify-between gap-6">
          <CategoryFilter
            value={category}
            onChange={setCategory}
          />

          <SortDropdown
            value={sort}
            onChange={onChange => {
              setSort(onChange);
              setCurrentPage(1);
            }}
          />
        </div>

        <ShopSearch
          value={search}
          onChange={(value) => {
            setSearch(value);
            setCurrentPage(1);
          }}
        />

        <ActiveFilters
  search={search}
  category={category}
  sort={sort}
  onClearSearch={() => setSearch("")}
  onClearCategory={() => setCategory("All")}
  onResetAll={() => {
    setSearch("");
    setCategory("All");
    setSort("featured");
    setCurrentPage(1);
  }}
/>

        <div className="mb-8 flex items-center justify-between">

  <p className="text-sm text-slate-500">
    Showing{" "}
    <span className="font-semibold text-slate-900">
      {(currentPage - 1) * PRODUCTS_PER_PAGE + 1}
    </span>
    –
    <span className="font-semibold text-slate-900">
      {Math.min(
        currentPage * PRODUCTS_PER_PAGE,
        filteredProducts.length
      )}
    </span>{" "}
    of{" "}
    <span className="font-semibold text-slate-900">
      {filteredProducts.length}
    </span>{" "}
    products
  </p>

</div>

      </div>

      {filteredProducts.length === 0 ? (

  <EmptyState
    onClear={() => {
      setSearch("");
      setCategory("All");
      setSort("featured");
      setCurrentPage(1);
    }}
  />

) : (

  <>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      {paginatedProducts.map((product) => (

        <FeaturedProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          category={product.category}
          price={product.price}
          comparePrice={product.comparePrice}
          rating={product.rating}
          reviews={product.reviews}
          badge={product.badge}
        />

      ))}

    </div>

    <Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>

  </>

)}

    </>
  );
}