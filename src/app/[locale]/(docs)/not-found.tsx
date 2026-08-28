import { NotFoundPage } from "@/components/NotFoundPage";

/**
 * The (docs) group has its own layout, so notFound() raised inside it does not
 * reach the boundary one level up — it needs a boundary of its own.
 */
export default function NotFound() {
  return <NotFoundPage />;
}
