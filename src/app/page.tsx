export default async function Page() {
  async function handleSubmit(formData: any) {
    "use server";

    console.log(formData.get("title"));
  }

  return (
    <div>
      <form action={handleSubmit}>
        <input name="title" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
