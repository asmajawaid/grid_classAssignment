import React from "react";

export default function Grid() {
  return (
    <div className="grid grid-cols-3 grid-flow-row grid-row-4 gap-2 h-auto border-spacing-4 border-red-950 items-center pt-4 m-4">
      <div className="bg-emerald-800 border-black col-span-full">
        6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        illo corrupti temporibus impedit, nobis nemo distinctio repellendus
        numquam doloribus voluptatibus rerum placeat necessitatibus possimus a
        quod fuga nam voluptates quia.
      </div>
      <div className="bg-emerald-800 border-black row-span-2">
        1
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div className="bg-emerald-800 border-black">
        2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque amet
        fuga molestiae asperiores illum obcaecati! Pariatur cum exercitationem
        officiis eius. Ab facere voluptatum eaque quisquam perspiciatis labore
        unde debitis dicta?
      </div>
      <div className="bg-emerald-800 border-black row-span-2">
        3 Lorem ipsum dolor sit amet consectetur adipisicing elit. At, inventore
        reprehenderit ut cumque similique cum officiis! Ipsum voluptate facilis
        omnis. Aperiam praesentium voluptas esse provident tempora, repellendus
        voluptatibus soluta quibusdam.
      </div>
      <div className="bg-emerald-800 border-black">
        4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam eius
        quae minima nesciunt consequatur dolores perspiciatis fuga hic accusamus
        libero aliquam nostrum nulla adipisci illo, fugit corrupti consequuntur
        non repudiandae!
      </div>
      <div className="bg-emerald-800 border-black col-span-full">
        5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tempore!
        Hic iure, dolore dolorum praesentium voluptates laudantium. Ea, et
        assumenda! In laudantium dolores eaque velit officiis rerum esse ex.
        Nam!
      </div>
    </div>
  );
}
