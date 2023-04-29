
// Wrap the original promise with new one that updates the state
export function trackPromise(promise: Promise<unknown>) {
    type Wrapper = { state: "pending" | "resolved" | "rejected", promise: Promise<unknown> | undefined };
    const wrapper: Wrapper = {
        state: "pending",
        promise: new Promise((resolve, reject) => {
            promise
                .then(result => {
                    wrapper.state = "resolved";
                    resolve(result);
                })
                .catch(error => {
                    wrapper.state = "rejected";
                    reject(error);
                });
        })
    };

    return wrapper;
}