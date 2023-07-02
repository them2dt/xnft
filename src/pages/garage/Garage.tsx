import Navigation from "../../components/general/Navigation";
import Rank from "../../components/general/Rank";
import GarageItem from "../../components/garage/GarageItem";
import { motion } from "framer-motion";

export default function Garage() {
  const array = [
    {
      mint: "test-1",
      name: "sporting f1 #0001",
      image:
        "https://piluty6xffqyh23pbbnfomhwi3jmnawalmghzngvfwhairtzha5q.arweave.net/ehdJ49cpYYPrbwhaVzD2RtLGgsBbDHy01S2OBEZ5ODs?ext=png",
      specs: [
        "Ferrari 066 10 | Pos 18",
        "Esteban Ocon | Pos 11",
        "Logan Sargeant | Pos 15",
        "Williams | Pos 13",
        "George Russell | Pos 2",
        "Esteban Ocon | Pos 2",
      ],
    },
    {
      mint: "test-2",
      name: "sporting f1 #0002",
      image:
        "https://piluty6xffqyh23pbbnfomhwi3jmnawalmghzngvfwhairtzha5q.arweave.net/ehdJ49cpYYPrbwhaVzD2RtLGgsBbDHy01S2OBEZ5ODs?ext=png",

      specs: [
        "Ferrari 066 10 | Pos 18",
        "Esteban Ocon | Pos 11",
        "Logan Sargeant | Pos 15",
        "Williams | Pos 13",
        "George Russell | Pos 2",
        "Esteban Ocon | Pos 2",
      ],
    },
    {
      mint: "test-3",
      name: "sporting f1 #0003",
      image:
        "https://piluty6xffqyh23pbbnfomhwi3jmnawalmghzngvfwhairtzha5q.arweave.net/ehdJ49cpYYPrbwhaVzD2RtLGgsBbDHy01S2OBEZ5ODs?ext=png",

      specs: [
        "Ferrari 066 10 | Pos 18",
        "Esteban Ocon | Pos 11",
        "Logan Sargeant | Pos 15",
        "Williams | Pos 13",
        "George Russell | Pos 2",
        "Esteban Ocon | Pos 2",
      ],
    },

    {
      mint: "test-4",
      name: "sporting f1 #0004",
      image:
        "https://piluty6xffqyh23pbbnfomhwi3jmnawalmghzngvfwhairtzha5q.arweave.net/ehdJ49cpYYPrbwhaVzD2RtLGgsBbDHy01S2OBEZ5ODs?ext=png",
      specs: [
        "Ferrari 066 10 | Pos 18",
        "Esteban Ocon | Pos 11",
        "Logan Sargeant | Pos 15",
        "Williams | Pos 13",
        "George Russell | Pos 2",
        "Esteban Ocon | Pos 2",
      ],
    },
  ];
  return (
    <div className="garage">
      <div className="top-spacer"></div>
      <Rank />
      <div className="container">
        <div className="container-content">
          <motion.div
            className="garage-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: 0.7,
            }}
            viewport={{ once: false }}
          >
            garage
          </motion.div>
          <div className="garage-items">
            {array.map((w, index) => (
              <GarageItem
                key={index}
                mint={w.mint}
                name={w.name}
                image={w.image}
                specs={w.specs}
              />
            ))}
          </div>
        </div>
      </div>
      <Navigation id={2} />
    </div>
  );
}