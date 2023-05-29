function Sprite() {
  return (
    <svg
      style={{
        position: "absolute",
        width: "0",
        height: "0",
        overflow: "hidden",
      }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol id="logo" viewBox="0 0 64 64">
          <defs></defs>
          <title />
          <g data-name="Layer 25" id="Layer_25">
            <path
              fill="#8a490e"
              d="M32,53A43.539,43.539,0,0,1,5.615,44.16L1.288,51.239a1.983,1.983,0,0,0,.627,2.693,54.441,54.441,0,0,0,60.17,0,1.983,1.983,0,0,0,.627-2.693L58.385,44.16A43.539,43.539,0,0,1,32,53Z"
            />
            <path
              fill="#a16d3e"
              d="M62.712,51.239,58.385,44.16c-.681.516-1.382,1.006-2.094,1.483l3.421,5.6a1.983,1.983,0,0,1-.627,2.693A53.965,53.965,0,0,1,30.5,62.972c.5.013,1,.028,1.5.028a54.008,54.008,0,0,0,30.085-9.068A1.983,1.983,0,0,0,62.712,51.239Z"
            />
            <path
              fill="#f6b361"
              d="M58.385,44.16a43.8,43.8,0,0,1-52.77,0L26.206,10.48,32,1l5.794,9.48Z"
            />
            <path
              fill="#f8c281"
              d="M37.794,10.48,32,1,30.5,3.454l4.294,7.026L55.385,44.16A43.523,43.523,0,0,1,30.5,52.969c.5.017,1,.031,1.5.031a43.547,43.547,0,0,0,26.385-8.84Z"
            />
            <path
              fill="#ffff97"
              d="M37.65,10.48A6.88,6.88,0,0,1,35,11a6.986,6.986,0,0,1-3-.68A6.986,6.986,0,0,1,29,11a6.88,6.88,0,0,1-2.65-.52L32,1Z"
            />
            <path
              fill="#ffffac"
              d="M32,1,30.5,3.517l4.15,6.963a6.757,6.757,0,0,1-1.143.353,6.92,6.92,0,0,0,4.143-.353Z"
            />
            <path d="M63.565,50.718l-4.327-7.079L32.867.5,32.859.488h0L32.854.479a.792.792,0,0,0-.111-.132c-.017-.019-.03-.042-.048-.059a1.075,1.075,0,0,0-1.39,0c-.019.018-.033.042-.051.062a.849.849,0,0,0-.108.129l-.005.008h0L31.133.5,4.762,43.639.435,50.718a2.989,2.989,0,0,0,.924,4.046,55.445,55.445,0,0,0,61.282,0A2.989,2.989,0,0,0,63.565,50.718ZM56.7,44.15c-.224.159-.448.316-.674.47q-.366.251-.737.492c-.232.151-.465.3-.7.447s-.495.306-.745.455-.478.284-.719.421-.5.282-.755.42-.489.265-.735.392-.513.261-.771.388-.5.245-.747.362-.521.239-.782.355-.508.226-.764.333-.529.217-.8.322-.512.2-.77.3-.544.2-.817.292-.516.182-.775.268c-.276.09-.554.175-.832.26-.26.079-.52.161-.781.235-.284.081-.569.155-.855.229-.259.068-.518.139-.778.2-.292.071-.587.133-.88.2-.258.057-.515.116-.774.168-.3.061-.609.113-.914.167-.252.045-.5.093-.756.134-.318.05-.638.091-.958.135-.244.033-.486.07-.731.1-.336.04-.674.07-1.012.1-.231.022-.461.049-.693.067-.375.03-.754.048-1.131.068-.2.01-.391.026-.587.034Q32.869,52,32,52t-1.731-.034c-.2-.008-.391-.024-.587-.034-.377-.02-.756-.038-1.131-.068-.232-.018-.462-.045-.693-.067-.338-.032-.676-.062-1.012-.1-.245-.029-.488-.066-.732-.1-.319-.044-.639-.085-.957-.135-.253-.041-.5-.089-.757-.134-.3-.054-.61-.106-.913-.167-.259-.052-.516-.111-.774-.168-.293-.065-.588-.127-.88-.2-.26-.063-.519-.134-.778-.2-.286-.074-.571-.148-.855-.229-.261-.074-.521-.156-.781-.235-.278-.085-.556-.17-.832-.26-.259-.086-.517-.178-.775-.268-.273-.1-.546-.191-.817-.292s-.514-.2-.77-.3-.531-.211-.8-.322-.51-.22-.764-.333-.523-.233-.782-.355-.5-.239-.748-.362-.514-.255-.769-.387-.492-.26-.736-.393-.505-.277-.755-.42-.48-.279-.719-.421-.5-.3-.745-.455-.467-.3-.7-.447-.493-.325-.737-.492c-.226-.154-.45-.311-.674-.47-.118-.084-.235-.17-.352-.256L26.661,11.651A8.039,8.039,0,0,0,32,11.412a7.985,7.985,0,0,0,5.339.24L57.05,43.894C56.933,43.98,56.816,44.066,56.7,44.15ZM36.137,9.894a6.07,6.07,0,0,1-3.709-.478,1,1,0,0,0-.856,0,6.073,6.073,0,0,1-3.709.478L32,2.953ZM61.529,53.1a53.442,53.442,0,0,1-59.058,0,.981.981,0,0,1-.329-1.34L5.9,45.614c.105.075.213.145.318.219.222.158.446.312.671.465q.4.275.811.541c.228.148.458.293.688.437q.411.256.824.5.352.208.706.411c.279.159.558.314.84.466q.358.2.72.383.423.219.851.428c.245.121.491.24.738.355.287.135.575.264.865.392.249.11.5.22.749.325.292.123.585.24.879.356.253.1.507.2.762.3.3.11.594.215.893.319.256.09.512.18.771.265.3.1.6.191.909.284.259.079.517.159.778.233.308.088.618.168.929.249.259.068.517.138.777.2.316.076.633.144.951.214.26.056.518.116.779.168.324.065.651.121.976.178.257.046.512.094.769.135.337.054.676.1,1.014.143.251.034.5.073.752.1.356.043.715.074,1.074.108.235.022.469.049.7.068.4.031.8.051,1.2.072.2.01.4.026.6.034Q31.093,54,32,54t1.807-.036c.2-.008.4-.024.595-.034.4-.021.8-.041,1.2-.072.235-.018.469-.046.7-.068.359-.034.718-.065,1.075-.108.252-.029.5-.068.752-.1.338-.045.677-.089,1.014-.143.257-.041.512-.089.769-.135.325-.057.652-.113.976-.178.261-.052.519-.112.779-.168.318-.07.635-.138.951-.214.26-.063.518-.133.777-.2.311-.081.621-.161.929-.249.261-.074.519-.154.778-.233.3-.093.608-.185.909-.284.259-.085.515-.175.771-.265.3-.1.6-.209.893-.319.255-.1.508-.2.761-.3.295-.117.588-.234.88-.357.251-.105.5-.214.749-.324.289-.129.578-.258.865-.393.247-.115.493-.234.738-.355q.427-.21.851-.428.361-.187.72-.383c.282-.152.561-.307.84-.466q.354-.2.706-.411.414-.246.824-.5c.23-.144.46-.289.688-.437q.408-.266.811-.541c.225-.153.449-.307.671-.465.105-.074.213-.144.318-.219l3.756,6.147A.981.981,0,0,1,61.529,53.1Z" />
            <circle fill="red" cx="32" cy="20" r="3" />
            <path d="M32,24a4,4,0,1,1,4-4A4,4,0,0,1,32,24Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,32,18Z" />
            <circle fill="red" cx="18" cy="41" r="3" />
            <path d="M18,45a4,4,0,1,1,4-4A4,4,0,0,1,18,45Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,18,39Z" />
            <circle fill="red" cx="46" cy="41" r="3" />
            <path d="M46,45a4,4,0,1,1,4-4A4,4,0,0,1,46,45Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,46,39Z" />
            <circle fill="red" cx="32" cy="44" r="3" />
            <path d="M32,48a4,4,0,1,1,4-4A4,4,0,0,1,32,48Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,32,42Z" />
            <circle fill="red" cx="24" cy="30" r="3" />
            <path d="M24,34a4,4,0,1,1,4-4A4,4,0,0,1,24,34Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,24,28Z" />
            <circle fill="red" cx="40" cy="30" r="3" />
            <path d="M40,34a4,4,0,1,1,4-4A4,4,0,0,1,40,34Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,40,28Z" />
            <path fill="#d39953" d="M27,38H25a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z" />
            <path fill="#d39953" d="M39,38H37a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z" />
            <path fill="#d39953" d="M33,30H31a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z" />
            <path fill="#d39953" d="M25,24H23a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z" />
            <path fill="#d39953" d="M41,24H39a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z" />
          </g>
        </symbol>

        <symbol id="basket" viewBox="0 0 18 18">
          <path
            d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>

        <symbol id="arrow-top" viewBox="0 0 10 6">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </symbol>

        <symbol id="cart" viewBox="0 0 18 18">
          <path
            d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>

        <symbol id="grey-arrow-left" viewBox="0 0 8 14">
          <path
            d="M7 13L1 6.93015L6.86175 1"
            stroke="#D3D3D3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>

        <symbol id="plus" viewBox="0 0 10 10">
          <path
            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
            fill="#EB5A1E"
          />
          <path
            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
            fill="#EB5A1E"
          />
        </symbol>

        <symbol id="trash" viewBox="0 0 20 20">
          <path
            d="M2.5 5H4.16667H17.5"
            stroke="#B6B6B6"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
            stroke="#B6B6B6"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.33337 9.16667V14.1667"
            stroke="#B6B6B6"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.6666 9.16667V14.1667"
            stroke="#B6B6B6"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
      </defs>
    </svg>
  );
}

export default Sprite;