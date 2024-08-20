while true; do
    RUST_BACKTRACE=full node main.js
    exit_code=$?
    echo "exit code $exit_code"
    if [ $exit_code -eq 134 ]; then
        echo "Command exited with SIGABRT (exit code 134)"
        break
    fi
done