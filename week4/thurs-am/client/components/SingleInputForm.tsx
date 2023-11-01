//1. props for func

function SingleInputForm() {
  //2. text state needs to change
  //3. function to handle change in form
  //4. function to handle submit in form, prevent default and updates the text state, look at conditionals?
  //5. set new text
  return (
    <>
      <form>
        <h2>Single Input Form</h2>
        <label htmlFor="new-scare">Scare Name </label>
        <input type="text" name="new-scare" id="new-scare" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default SingleInputForm
