import { fakeAsync, tick, flush, flushMicrotasks } from "@angular/core/testing";

fdescribe("Async Testing Examples", () => {
  it("Asynchronous test example with Jasmine done()", (done: DoneFn) => {
    let test = false;

    setTimeout(() => {
      test = true;

      expect(test).toBeTruthy();

      done();
    }, 1000);
  });

  it("Asynchrounous test example - setTimeout()", fakeAsync(() => {
    let test = false;

    setTimeout(() => {});

    setTimeout(() => {
      console.log("running assertions setTimeout...");
      test = true;
    }, 1000);

    // tick(1000);
    flush(); // complete all async pending functions before expecct to be evalute

    expect(test).toBeTruthy();
  }));

  it("Asynchronous test example - plain Promise", fakeAsync(() => {
    let test = false;

    console.log("Creating Promise");

    Promise.resolve()
      .then(() => {
        console.log("Promise first then() evaluated successfully");

        return Promise.resolve();
      })

      .then(() => {
        console.log("Promise second then() evaluated successfully");

        test = true;
      });

    flushMicrotasks();

    console.log("Running Test assertions");

    expect(test).toBeTruthy();
  }));
});
