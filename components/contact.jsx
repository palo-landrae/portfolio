export const Contact = () => {
  return (
    <form action="http://www.acme.com/register" method="POST">
  <label for="name">Name</label>
  <input id="name" type="text" autocomplete="name" required />
  <button type="submit">Register</button>
</form>
  );
}
