import ExecutionContext from "../execution";

interface ExecutionResult {
    gasFee: number;
}

class Instruction {
    public readonly opcode: number;
    public readonly name: string;
    public readonly execute: (ctx: ExecutionContext) => Promise<ExecutionResult>;

    constructor(
        opcode: number,
        name: string,
        gasFee: ((ctx: ExecutionContext) => Promise<number>) | number,
        execute: (ctx: ExecutionContext) => void
    ) {
        this.opcode = opcode;
        this.name = name;
        this.execute = async (ctx: ExecutionContext) => {
            const gasFeeFunction = typeof gasFee === "function" ? gasFee : () => gasFee;
            const effectivegasFee = await gasFeeFunction(ctx);
            ctx.useGas(effectivegasFee); // we always want to evaluete gas fee before executing the instruction
            await execute(ctx);
            return {gasFee: effectivegasFee};
        };
    }
}

export default Instruction;
