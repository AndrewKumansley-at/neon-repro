use neon::prelude::*;

fn hello_async(mut cx: FunctionContext) -> JsResult<JsPromise> {
    Ok(cx
        .task(|| -> Result<String, String> { Err("hi".to_owned()) })
        .promise(|mut cx, result| match result {
            Ok(_) => Ok(cx.undefined()),
            Err(_) => {
                let err_msg = format!("there was an error");
                let err = cx.error(err_msg).unwrap();
                cx.throw(err)
            }
        }))
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("helloAsync", hello_async)?;
    Ok(())
}
