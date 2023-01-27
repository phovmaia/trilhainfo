import {  CheckIcon } from "@chakra-ui/icons";
import { FaRegCircle } from "react-icons/fa";
import { Center, Stack } from "@chakra-ui/react";
import { Level, RoadmapItem } from "../../entity/RoadmapModel";
import ReactGA from "react-ga4";

type Props = {
  level: Level;
  index: number;
  levelsQty: number;
  setActiveItem: (item: RoadmapItem) => void;
  onOpen: () => void;
  isAllContentRead: (label: string, contentLength: number) => boolean;
  checkAllContent: (label: string, check: boolean) => void;
};

export default function LevelItem(props: Props) {
  function triggerItemSelection(item: RoadmapItem) {
    props.setActiveItem(item);
    window.history.pushState(item.label,item.label ,`#${encodeURI(item.label)}`)
    ReactGA.event({
      category: "item_open",
      action: "open_" + item.label,
    });
    props.onOpen();
  }

  return (
    <Stack spacing={0} as="article">
      <div
        className={
          props.level.label
            ? " border-2 border-dark-red border-dotted rounded-md pb-5 bg-light-yellow lg:w-2/3 self-center p-4"
            : ""
        }
      >
        {props.level.label && (
          <>
            <h3 className="text-center my-2 font-title text-xl">
              {props.level.label}
            </h3>
            <p className="text-center mb-3">{props.level.description}</p>
          </>
        )}
        <div
          className={
            "flex place-content-center " +
            (props.level.items.length >= 4 ? " flex-wrap space-x-2" : "")
          }
        >
          {props.level.items.map((item, index, level) => {
            const quantity = item.children?.length || -1;
            const isAllContentRead = props.isAllContentRead(
              item.label,
              quantity
            );

            return (
              <>
                <div
                  onClick={() => {
                    triggerItemSelection(item);
                  }}
                  key={item.label}
                  className={
                    "flex center mx-0 my-0 p-1 md:p-2 overflow-hidden  w-fit text-center cursor-pointer rounded-md border-2 border-dark-red hover:bg-white  hover:shadow-md" +
                    (level.length >= 4 ? " mb-3" : "") +
                    (isAllContentRead ? " bg-light-orange" : " bg-brown")
                  }
                >
                  
                  {isAllContentRead ? (
                    <span className="animate-checking">
                      <CheckIcon
                        m="auto"
                        mx="1"
                        color={"#228B22"}
                        onClick={(e) => {
                          props.checkAllContent(
                            item.label,
                            !props.isAllContentRead(
                              item.label,
                              item.children?.length || -1
                            )
                          );
                          e.stopPropagation();
                        }}
                      />
                    </span>
                  ) : (
                    <FaRegCircle
                      className="m-auto mx-1 hover:text-light-orange hover: hover:fill-light-orange animate-checking"
                      onClick={(e) => {
                        props.checkAllContent(
                          item.label,
                          !props.isAllContentRead(
                            item.label,
                            item.children?.length || -1
                          )
                        );
                        e.stopPropagation();
                      }}
                    />
                  )}
                  <p
                    className={
                      "m-auto c-dark-brown  font-title text-lg md:whitespace-nowrap whitespace-normal"
                    }
                  >
                    {item.label}
                  </p>

                  {/* <InfoIcon m="auto" mx="1" color={"#494443"} /> */}
                </div>
                {index < level.length - 1 && level.length < 4 && (
                  <div className="border-dark-red border-2 border-dashed h-1 my-auto min-w-[10px] max-w-[20px] md:max-w-[50px] flex-grow"></div>
                )}
              </>
            );
          })}
        </div>
      </div>
      {props.index < props.levelsQty - 1 && (
        <Center mt={0}>
          <div className="border-dark-red border-2 w-1 my-0 h-[30px]"></div>
        </Center>
      )}
    </Stack>
  );
}
