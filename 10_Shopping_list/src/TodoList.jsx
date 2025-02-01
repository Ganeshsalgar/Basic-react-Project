
const TodoList = () => {
  return (
    <div className="text-center border-x border-b mt-[-10px] p-2">
        <div className="flex justify-between border-b p-3">
            <input type="checkbox" name=""/>
            <h2>Item1</h2>
            <div>{"X"}</div>
        </div>
        <div className="flex justify-between border-b p-3">
            <input type="checkbox" name="" className=""/>
            <h2>Item1</h2>
            <div className="bg-red-400 px-1 rounded-sm">{"X"}</div>
        </div>
        <div className="flex justify-between border-t p-3">
            <input type="checkbox" name=""/>
            <h2>Item1</h2>
            <div>{"X"}</div>
        </div>
        <div className="flex justify-between border-t p-3">
            <input type="checkbox" name=""/>
            <h2>Item1</h2>
            <div>{"X"}</div>
        </div>
        <div className="flex justify-between border-t p-3">
            <input type="checkbox" name=""/>
            <h2>Item1</h2>
            <div>{"X"}</div>
        </div>
    </div>
  )
}

export default TodoList