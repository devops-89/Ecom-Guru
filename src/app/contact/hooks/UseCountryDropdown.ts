import {
  useEffect,
  RefObject,
} from "react";

interface UseCountryDropdownProps {
  ref: RefObject<HTMLDivElement | null>;
  country: string;
  
  setCountryOpen: (
    open: boolean
  ) => void;

  setCountrySearch: (
    value: string
  ) => void;
}

export default function useCountryDropdown({
  ref,
  country,
  setCountryOpen,
  setCountrySearch,
}: UseCountryDropdownProps) {

  useEffect(() => {

    const handleClickOutside = (
      event: MouseEvent
    ) => {

      if (
        !ref.current?.contains(
          event.target as Node
        )
      ) {
        setCountryOpen(false);

        setCountrySearch(country);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, [
    ref,
    country,
    setCountryOpen,
    setCountrySearch,
  ]);
}