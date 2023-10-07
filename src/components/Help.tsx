import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const Help = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Help Menu</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How to play Tic Tac Toe - Instruction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <OrderedList>
              <ListItem className="font-bold uppercase"> Objective:</ListItem>

              <UnorderedList>
                <ListItem>
                  The objective of Tic Tac Toe is to be the first player to form
                  a horizontal, vertical, or diagonal line of three of your
                  symbols (either "X" or "O") on the 3x3 game board.
                </ListItem>
              </UnorderedList>
              <ListItem className="font-bold uppercase">Game Setup:</ListItem>
              <UnorderedList>
                <ListItem>
                  You'll be playing against another player (opponent).
                </ListItem>
                <ListItem>
                  You'll be playing against another player (opponent).
                </ListItem>
                <ListItem>
                  Players take turns to place their symbols on empty cells of
                  the board.
                </ListItem>
              </UnorderedList>
              <ListItem className="font-bold uppercase">
                Game Controls:
              </ListItem>
              <UnorderedList>
                <ListItem>
                  To place your symbol, click on an empty cell on the board.
                </ListItem>
                <ListItem>You'll take turns with your opponent.</ListItem>
                <ListItem>
                  Your symbol will be automatically placed in the selected cell.
                </ListItem>
              </UnorderedList>
              <ListItem className="font-bold uppercase">
                Winning the Game:
              </ListItem>
              <UnorderedList>
                <ListItem>
                  The game ends when one player successfully forms a line of
                  three of their symbols.
                </ListItem>
                <ListItem>
                  The line can be horizontal, vertical, or diagonal.
                </ListItem>
                <ListItem>
                  When this happens, the game announces the winner.
                </ListItem>
              </UnorderedList>
              <ListItem className="font-bold uppercase">Draw (Tie):</ListItem>
              <UnorderedList>
                <ListItem>
                  If all cells on the board are filled, and no player has formed
                  a winning line, the game ends in a draw (tie).
                </ListItem>
                <ListItem>In this case, neither player wins.</ListItem>
              </UnorderedList>
              <ListItem className="font-bold uppercase">
                Game Strategy:
              </ListItem>
              <UnorderedList>
                <ListItem>
                  To win, try to form a line of three symbols before your
                  opponent does.
                </ListItem>
                <ListItem>
                  Pay attention to your opponent's moves to block potential
                  winning lines.
                </ListItem>
                <ListItem>Hidden secret hint: ALWAYS START FIRST</ListItem>
              </UnorderedList>
            </OrderedList>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Confirm
            </Button>
            <Button variant="ghost">Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Help;
