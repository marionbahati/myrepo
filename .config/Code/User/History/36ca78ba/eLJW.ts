
interface SquareConfig {
    color?: string;
    width?: number;
  }

  function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
      color: config.color || "red",
      area: config.width ? config.width * config.width : 20,
    };
  }
  let mySquare = createSquare({ color: "red", width: 100 });
  

  interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  let mySearch: SearchFunc;
 
 mySearch = function (source: string, subString: string): boolean {
  let result = source.search(subString);
  return result > -1;
 };