function Images (){
  return (
    <div className="container mx-auto p-4">
      <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="third.jpg"
              alt=""
            />
          </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="first.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="second.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="fourth.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="fiveone.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="sixth.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="sevenone.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Images