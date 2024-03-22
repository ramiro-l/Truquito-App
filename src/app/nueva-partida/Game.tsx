import CardPoints from '../contador-de-puntos/CardPoints';
import Title from '@/components/ui/title';

type Props = {
  sendMessage: any;
};
export default function Game({ sendMessage }: Props) {
  const playerCards = [
    { title: 'Card 1', onClick: () => sendMessage(1, 1) },
    { title: 'Card 2', onClick: () => sendMessage(1, 2) },
    { title: 'Card 3', onClick: () => sendMessage(1, 3) },
  ];

  const opponentCards = [
    { title: 'Card 1', onClick: () => sendMessage(2, 1) },
    { title: 'Card 2', onClick: () => sendMessage(2, 2) },
    { title: 'Card 3', onClick: () => sendMessage(2, 3) },
  ];

  return (
    <div className="justify mt-10 flex min-h-screen items-start px-10 md:flex-row">
      {/* play stage */}
      <div className="flex flex-col items-center">
        <button
          className="mb-4 min-w-[300px] rounded-md border-primary bg-primary px-4 pt-2 uppercase text-secondary active:bg-secondary active:text-primary"
          onClick={() => {
            console.log('create game');
          }}
        >
          Crear Partida
        </button>
        <button
          className="min-w-[300px] rounded-md border-primary bg-primary px-4 pt-2 uppercase text-secondary active:bg-secondary active:text-primary mb-4"
          onClick={() => {
            console.log('share link');
          }}
        >
          Invitar
        </button>
  
        <div className="flex flex-row items-center justify-between">
          <div className="flex-1 mr-2 mt-10">
            <Title title="" subtitle="Player 1" />
            {playerCards.map((card) => (
              <button
                key={card.title}
                className="w-full min-w-[200px] rounded-md border-primary bg-primary px-4 pt-2 uppercase text-secondary active:bg-secondary active:text-primary mb-4"
                onClick={card.onClick}
              >
                {card.title}
              </button>
            ))}
          </div>
  
          <div className="flex-1 ml-2 mt-10">
            <Title title="" subtitle="Player 2" />
            {opponentCards.map((card, i) => (
              <button
                key={card.title}
                className="w-full min-w-[200px] rounded-md border-primary bg-primary px-4 pt-2 uppercase text-secondary active:bg-secondary active:text-primary mb-4"
                onClick={card.onClick}
              >
                {card.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );  
}