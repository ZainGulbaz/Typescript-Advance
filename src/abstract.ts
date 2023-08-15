abstract class Command{
    abstract commandLine():string;

    execute=()=>{
        console.log("Executing command....",this.commandLine());
    }
}

class GitResetCommand extends Command{
    commandLine(): string {
        return " git reset --head";
    }
}

class GitCommitCommand extends Command{
    commandLine(): string {
        return "git commit -m 'Enter your message' ";
    }
}

let gitReset= new GitResetCommand();
gitReset.execute();