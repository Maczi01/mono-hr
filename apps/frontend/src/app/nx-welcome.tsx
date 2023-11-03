/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import {Input} from "@ems/common-ui";

export function NxWelcome({title}: { title: string }) {
  return (
    <div className="wrapper">
      <div className="container">

        <Input onValueChange={() => {console.log('v')}}/>
      </div>
    </div>
  );
}

export default NxWelcome;
