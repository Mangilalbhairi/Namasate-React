const Contact = () => {
    return(
        <form >
            <div>
            <label for="username">Name:</label>
            <input type="text" id="username" />
            </div>
            <div>
            <label for="email">Email:</label>
            <input type="email" id="email" />
            </div>
            <div>
            <label for="phone">Phone No:</label>
            <input type="phone" id="phone" />
            </div>
            <button type="submit" value="submit">submit</button>

        </form>
    )
}
export default Contact