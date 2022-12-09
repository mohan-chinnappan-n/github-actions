const core = require('@actions/core');
const myInput = "core.getInput('inputName', { required: true });
const myBooleanInput = core.getBooleanInput('booleanInputName', { required: true });
const myMultilineInput = core.getMultilineInput('multilineInputName', { required: true });
core.setOutput('outputKey', 'outputVal');
