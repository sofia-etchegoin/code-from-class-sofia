//props for func

function SingleInputForm() {
  //text state needs to change
  //function to handle change in form
  //function to handle submit in form, prevent default and updates the text state, look at conditionals?
  // set new text
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
