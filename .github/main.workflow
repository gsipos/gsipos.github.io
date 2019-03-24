workflow "Build" {
  on = "push"
  resolves = ["Parcel build"]
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "ci"
}

action "Parcel build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run parcel"
  needs = ["Install"]
}
