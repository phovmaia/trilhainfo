import {
    LinkContentType,
    LinkType,
    RoadmapItem,
    RoadmapModel,
  } from "../../entity/RoadmapModel";

  export const cicd: RoadmapItem = {
    label: "Ferramentas de CI/CD",
    description: "",
    children: [
        {
            label:"GitHub Actions",
            links: [
                {
                    url: "",
                    label: "",
                    type: "",
                    votes: 0,
                    contentType: LinkContentType.WATCH
                }
            ]
        }
    ]
  };