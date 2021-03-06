var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  // res.send('respond with a resource');
  res.json([
    {
      id: 1,
      title: "On Suffering",
      author: "John Foley",
      date: "11-December-2019",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores, praesentium necessitatibus a quae error unde porro illum mollitia laudantium sunt vero voluptas eos quidem odit blanditiis quam excepturi ipsum impedit doloremque, perferendis officia, dolorum sit? Perferendis, nemo, eaque et enim beatae possimus reiciendis inventore, porro aperiam eligendi molestias exercitationem illum minima dicta voluptas. At cumque esse dicta obcaecati quos, voluptatibus hic pariatur qui adipisci. Dolorum reiciendis, vero quos mollitia sunt quas eligendi ullam officiis perspiciatis nemo! Accusantium natus pariatur repellendus, quasi itaque aperiam laborum dolore necessitatibus cupiditate quos? 

        Neque architecto laborum et repellendus incidunt exercitationem officiis mollitia, at cum quis nobis recusandae molestiae quo veniam adipisci facere rerum rem. Odit fuga distinctio aspernatur eos magni vitae placeat, minima ullam facere illum perferendis, est ea cumque aliquid nisi accusamus, cum neque libero sunt necessitatibus. Nesciunt nostrum sapiente adipisci. Officiis fugiat beatae et quis dolorum deserunt non quisquam quia, quos perferendis amet ea atque ad eum cum repellat, neque qui soluta recusandae nulla! Porro facere unde veritatis id, ea, possimus voluptatibus explicabo sit minima libero, illo vitae corrupti nihil soluta pariatur quibusdam voluptas perferendis culpa laudantium distinctio tempore mollitia repudiandae molestiae. 
      
        Aut expedita exercitationem quos harum dignissimos ex rem reiciendis ullam quae similique tenetur inventore consequatur beatae, dolor iste provident nobis quod minima, ea omnis at cum. Aut consectetur magni quaerat fugit maxime voluptas qui assumenda accusamus dignissimos maiores nemo deleniti magnam, soluta eos at, esse beatae dolorum consequatur repellat. Odit aperiam quibusdam laborum repellendus, ab perspiciatis! A corporis quae dolorem temporibus deserunt repudiandae, minus, numquam voluptatibus animi sed nostrum quam harum magnam voluptates.
        Ipsa dolores aut facilis nisi facere quaerat nostrum nemo hic est, sapiente eos dolorem, ipsam sequi recusandae consequuntur, enim molestias aliquam. Delectus alias iure amet nostrum provident sequi atque repellendus mollitia odio laboriosam quod voluptatem ullam, magnam eligendi rem quaerat ab sunt molestias vero aut corrupti ut! Praesentium ad eum dolores in ipsum ullam voluptatem illo exercitationem? Vitae iusto quo nulla recusandae ipsam ut assumenda consequuntur non illum. Ut ipsa commodi pariatur animi laudantium voluptatibus voluptatem voluptas exercitationem perspiciatis ipsum placeat incidunt delectus expedita odio praesentium officia alias at modi, illo ullam aperiam cum officiis ipsam adipisci? Ipsam aut magni vero culpa consequatur ut itaque eligendi officia obcaecati autem, blanditiis officiis corrupti quo dolor quibusdam aspernatur odit maxime amet unde esse temporibus, at sapiente a? Corrupti quia recusandae placeat voluptatem consequatur! Molestiae recusandae temporibus error sequi soluta eligendi reiciendis vero cupiditate minima saepe itaque, eos quibusdam. Vitae optio, eligendi dolore officiis cupiditate, non delectus fugiat nemo labore, eum dolores voluptatibus esse. Quam eius quasi maiores, exercitationem, et dolorem hic laborum aliquam debitis minima fuga asperiores id voluptas voluptatem alias sequi laudantium iusto voluptatibus ullam dolore veritatis rerum! Aspernatur, vel voluptas ipsa facilis iure id dolorum earum laborum hic laboriosam nesciunt, velit quos quas voluptates temporibus. Est pariatur adipisci quo voluptatibus voluptates eos, unde ad vitae magnam incidunt ducimus expedita eius. Blanditiis, fuga itaque dolorum quidem necessitatibus placeat inventore voluptatibus dolorem! Ex, quod labore inventore veniam quibusdam aut.`,
      image: "../../../images/lib_ridge.png"
    }
  ]);
});

module.exports = router;
