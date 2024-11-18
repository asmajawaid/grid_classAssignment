import React from "react";

export default function Header() {
  return (
    <>
      <div className="mx-w-[1200px] grid grid-rows-3 grid-flow-col gap-4 mx-auto h-full w-auto py-5 bg-slate-100 border-3 border-black ">
        <div className="items_container h-28 bg-blue-400 border-2 border-red-950 row-span-4 col-span-3">
          1
        </div>
        <div className="items_container bg-blue-400 border-2 border-red-950 row-start-1 row-end-3">
          2
        </div>
        <div className="items_container bg-blue-400 border-2 border-red-950">
          3
        </div>
        <div className="items_container h-28 bg-blue-400 border-2 border-red-950">
          4
        </div>
        <div className="items_container bg-blue-400 border-2 border-red-950">
          5
        </div>
        <div className="items_container bg-blue-400 border-2 border-red-950">
          6
        </div>
        <div className="items_container h-28 bg-blue-400 border-2 border-red-950">
          7
        </div>
        <div className="items_container bg-blue-400 border-2 border-red-950">
          8
        </div>
        <div className="items_container bg-blue-400 border-2 border-red-950">
          9
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4 bg-slate-500 py-5 text-center">
        <div className="bg-amber-900 text-black">hELLOW</div>
        <div className="bg-amber-900 text-black">hELLOW</div>
        <div className="bg-amber-900 text-black">hELLOW</div>
        <div className="bg-amber-900 text-black">hELLOW</div>
        <div className="bg-amber-900 text-black">hELLOW</div>
        <div className="bg-amber-900 text-black">hELLOW</div>
        <div className="bg-amber-900 text-black">hELLOW</div>
        <div className="bg-amber-900 text-black">hELLOW</div>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-[1200px] mx-auto py-5  border-red-950 text-center">
        <div className="bg-emerald-800 border-black">
          1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          illo corrupti temporibus impedit, nobis nemo distinctio repellendus
          numquam doloribus voluptatibus rerum placeat necessitatibus possimus a
          quod fuga nam voluptates quia.
        </div>
        <div className="bg-emerald-800 border-black">
          2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
          similique impedit ipsum nostrum. Explicabo architecto doloribus
          tempora cum perferendis, sed corrupti, sit pariatur animi repellat
          fugit dicta accusamus recusandae ipsum.
        </div>
        <div className="bg-emerald-800 border-black">
          3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque amet
          fuga molestiae asperiores illum obcaecati! Pariatur cum exercitationem
          officiis eius. Ab facere voluptatum eaque quisquam perspiciatis labore
          unde debitis dicta?
        </div>
        <div className="bg-emerald-800 border-black">
          4 Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
          inventore reprehenderit ut cumque similique cum officiis! Ipsum
          voluptate facilis omnis. Aperiam praesentium voluptas esse provident
          tempora, repellendus voluptatibus soluta quibusdam.
        </div>
        <div className="bg-emerald-800 border-black">
          5 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam eius
          quae minima nesciunt consequatur dolores perspiciatis fuga hic
          accusamus libero aliquam nostrum nulla adipisci illo, fugit corrupti
          consequuntur non repudiandae!
        </div>
        <div className="bg-emerald-800 border-black">
          6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
          tempore! Hic iure, dolore dolorum praesentium voluptates laudantium.
          Ea, et assumenda! In laudantium dolores eaque velit officiis rerum
          esse ex. Nam!
        </div>
      </div>

      <div className="grid grid-flow-dense grid-rows-4 grid-cols-4 gap-4 max-w-[1250px] mx-auto py-5 border-red-950 text-center">
        <div className="bg-emerald-200 border-black p-4 col-span-full">
          1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          illo corrupti temporibus impedit, nobis nemo distinctio repellendus
          numquam doloribus voluptatibus rerum placeat necessitatibus possimus a
          quod fuga nam voluptates quia.
        </div>
        <div className="bg-emerald-200 border-black p-4 row-span-2">
          2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
          similique impedit ipsum nostrum. Explicabo architecto doloribus
          tempora cum perferendis, sed corrupti, sit pariatur animi repellat
          fugit dicta accusamus recusandae ipsum.
        </div>
        <div className="bg-emerald-200 border-black p-4 col-span-2">
          3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque amet
          fuga molestiae asperiores illum obcaecati! Pariatur cum exercitationem
          officiis eius. Ab facere voluptatum eaque quisquam perspiciatis labore
          unde debitis dicta?
        </div>
        <div className="bg-emerald-200 border-black p-4 col-span-2">
          4 Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
          inventore reprehenderit ut cumque similique cum officiis! Ipsum
          voluptate facilis omnis. Aperiam praesentium voluptas esse provident
          tempora, repellendus voluptatibus soluta quibusdam.
        </div>
        <div className="bg-emerald-200 border-black p-4 row-span-2">
          5 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam eius
          quae minima nesciunt consequatur dolores perspiciatis fuga hic
          accusamus libero aliquam nostrum nulla adipisci illo, fugit corrupti
          consequuntur non repudiandae!
        </div>
        <div className="bg-emerald-200 border-black p-4 col-span-full">
          6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
          tempore! Hic iure, dolore dolorum praesentium voluptates laudantium.
          Ea, et assumenda! In laudantium dolores eaque velit officiis rerum
          esse ex. Nam!
        </div>
        {/* <div className='bg-emerald-200 border-black p-4'>7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore! Hic iure, dolore dolorum praesentium voluptates laudantium. Ea, et assumenda! In laudantium dolores eaque velit officiis rerum esse ex. Nam!</div>
      <div className='bg-emerald-200 border-black p-4'>8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore! Hic iure, dolore dolorum praesentium voluptates laudantium. Ea, et assumenda! In laudantium dolores eaque velit officiis rerum esse ex. Nam!</div>
   */}
      </div>
      <hr />
      <div className="grid grid-flow-dense grid-rows-4 grid-cols-3 gap-4 max-w-[1250px] mx-auto py-5 border-red-950 text-center">
        <div className="bg-emerald-200 border-black p-4 col-span-full">
          {" "}
          <h1>HEADER</h1> Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Pariatur illo corrupti temporibus impedit, nobis nemo distinctio
          repellendus numquam doloribus voluptatibus rerum placeat
          necessitatibus possimus a quod fuga nam voluptates quia.
        </div>
        <div className="bg-emerald-200 border-black p-4 row-span-2">
          <h1>NAVBAR</h1> Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Quos similique impedit ipsum nostrum. Explicabo architecto
          doloribus tempora cum perferendis, sed corrupti, sit pariatur animi
          repellat fugit dicta accusamus recusandae ipsum.
        </div>
        <div className="bg-emerald-200 border-black p-4 col-span-2">
          <h1>MAIN CONTENT</h1> Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Neque amet fuga molestiae asperiores illum
          obcaecati! Pariatur cum exercitationem officiis eius. Ab facere
          voluptatum eaque quisquam perspiciatis labore unde debitis dicta?
        </div>
        <div className="bg-emerald-200 border-black p-4 ">
          <h1>ads</h1> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          At, inventore reprehenderit ut cumque similique cum officiis! Ipsum
          voluptate facilis omnis. Aperiam praesentium voluptas esse provident
          tempora, repellendus voluptatibus soluta quibusdam.
        </div>
        <div className="bg-emerald-200 border-black p-4 ">
          <h1>ads</h1> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quam eius quae minima nesciunt consequatur dolores perspiciatis fuga
          hic accusamus libero aliquam nostrum nulla adipisci illo, fugit
          corrupti consequuntur non repudiandae!
        </div>
        <div className="bg-emerald-200 border-black p-4 col-span-full">
          <h1>FOOTER</h1> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Hic, tempore! Hic iure, dolore dolorum praesentium voluptates
          laudantium. Ea, et assumenda! In laudantium dolores eaque velit
          officiis rerum esse ex. Nam!
        </div>
        {/* <div className='bg-emerald-200 border-black p-4'>7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore! Hic iure, dolore dolorum praesentium voluptates laudantium. Ea, et assumenda! In laudantium dolores eaque velit officiis rerum esse ex. Nam!</div> */}
        {/* <div className='bg-emerald-200 border-black p-4'>8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore! Hic iure, dolore dolorum praesentium voluptates laudantium. Ea, et assumenda! In laudantium dolores eaque velit officiis rerum esse ex. Nam!</div> */}
      </div>

      <hr />
      <div className="grid grid-flow-dense grid-rows-4 grid-cols-4 gap-4 max-w-[1250px] mx-auto py-5 border-red-950 text-center">
        <div className="bg-emerald-800 border-black p-4 col-span-full">
          {" "}
          <h1>1 HEADER</h1> Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Pariatur illo corrupti temporibus impedit, nobis nemo distinctio
          repellendus numquam doloribus voluptatibus rerum placeat
          necessitatibus possimus a quod fuga nam voluptates quia.
        </div>
        <div className="bg-emerald-800 border-black p-4 row-span-2">
          <h1>2 NAVBAR</h1> Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Quos similique impedit ipsum nostrum. Explicabo architecto
          doloribus tempora cum perferendis, sed corrupti, sit pariatur animi
          repellat fugit dicta accusamus recusandae ipsum.
        </div>
        <div className="bg-emerald-800 border-black p-4 col-span-2">
          <h1>3 MAIN CONTENT</h1> Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Neque amet fuga molestiae asperiores illum
          obcaecati! Pariatur cum exercitationem officiis eius. Ab facere
          voluptatum eaque quisquam perspiciatis labore unde debitis dicta?
        </div>
        <div className="bg-emerald-800 border-black p-4 row-span-2">
          <h1>4 ads</h1> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. At, inventore reprehenderit ut cumque similique cum officiis!
          Ipsum voluptate facilis omnis. Aperiam praesentium voluptas esse
          provident tempora, repellendus voluptatibus soluta quibusdam.
        </div>
        <div className="bg-emerald-800 border-black p-4 ">
          <h1>5 CARDS</h1> Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Quam eius quae minima nesciunt consequatur dolores perspiciatis
          fuga hic accusamus libero aliquam nostrum nulla adipisci illo, fugit
          corrupti consequuntur non repudiandae!
        </div>
        <div className="bg-emerald-800 border-black p-4 col-span-full h-1/3">
          <h1>6 FOOTER</h1> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Hic, tempore! Hic iure, dolore dolorum praesentium voluptates
          laudantium. Ea, et assumenda! In laudantium dolores eaque velit
          officiis rerum esse ex. Nam!
        </div>
        <div className="bg-emerald-800 border-black p-4">
          <h1>7 CARDS</h1>Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Hic, tempore! Hic iure, dolore dolorum praesentium voluptates
          laudantium. Ea, et assumenda! In laudantium dolores eaque velit
          officiis rerum esse ex. Nam!
        </div>
        {/* <div className='bg-emerald-200 border-black p-4'>8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore! Hic iure, dolore dolorum praesentium voluptates laudantium. Ea, et assumenda! In laudantium dolores eaque velit officiis rerum esse ex. Nam!</div> */}
      </div>
    </>
  );
}
