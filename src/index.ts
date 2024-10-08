import {argv} from "process";
import ExecutionContext from "./classes/execution";
import {Trie} from "@ethereumjs/trie";
import {Level} from "level";
import LevelDB from "./classes/storage";
import {DB_PATH} from "./constants";

const main = async () => {
    const code = argv[2] ?? "0x00";
    const gasLimit = argv[3] ?? "21000";
    const trie = await Trie.create({
        db: new LevelDB(new Level(DB_PATH)),
        useRootPersistence: true,
    });
    console.log(`Running code: ${code}`);
    const executionContext = new ExecutionContext(code, BigInt(gasLimit), trie);

    executionContext.run();
};

main();
