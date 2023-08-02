import {useRouter} from "next/router";
import React, { useEffect} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {communityState} from "../atoms/communitiesAtom";
import {
    defaultMenuItem,
    DirectoryMenuItem,
    DirectoryMenuState,
} from "../atoms/directoryMenuAtoms"
import { FaReddit } from "react-icons/fa";
import { MenuItem } from "@chakra-ui/react";

const useDirectory = () => {
    const [directoryState, setDirectoryState] =
     useRecoilState(DirectoryMenuState);
    const router = useRouter();

    const communityStateValue = useRecoilValue(communityState);
    const onSelectMenuItem = (menuItem: DirectoryMenuItem) => {
        setDirectoryState((prev) => ({
            ...prev,

            selectedMenuItem: menuItem,
        }));
        router?.push(menuItem.link);
        if (directoryState.isOpen) {
            toggleMenuOpen();
        }
    };

    const toggleMenuOpen = () => {
        setDirectoryState((prev) => ({
            ...prev,
            isOpen: !directoryState.isOpen
        }));
    }
    useEffect(() => {
        const {community} = router.query;

         // const existingCommunity =
    //   communityStateValue.visitedCommunities[community as string];

        const existingCommunity = communityStateValue.currentCommunity;

        if (existingCommunity.id) {
            setDirectoryState((prev) => ({
              ...prev,
              selectedMenuItem: {
                displayText: `r/${existingCommunity.id}`,
                link: `r/${existingCommunity.id}`,
                icon: FaReddit,
                iconColor: "blue.500",
                imageURL: existingCommunity.imageURL,
              },
            }));
            return;
          }
          setDirectoryState((prev) => ({
            ...prev,
            selectedMenuItem: defaultMenuItem,
          }));
    }, [communityStateValue.currentCommunity]);

    return { directoryState, onSelectMenuItem, toggleMenuOpen };
};

export default useDirectory;