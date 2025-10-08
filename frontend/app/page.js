import CustomerForm from "../components/CustomerForm";
import UpdateForm from "../components/UpdateForm";
import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customer Management</h1>
      <CustomerForm />
      <UpdateForm />
      <SearchForm />
    </main>
  );
}
