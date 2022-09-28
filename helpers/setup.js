const sdk = require("node-appwrite");

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);
const storage = new sdk.Storage(client);

client
  .setSelfSigned(true)
  .setProject("playground")
  // Update this key
  .setKey(
    "beb1e9fdeece6048ffa707a8cf19f3f645bce784def5135f3f8f5c91e382570ac26df1180105ba50068df79a20687fbc5b2af525fe2962550f42840175656444584cc84e97ec4b5ae57e342b912949c98224bac9d64ba6f3531ba33da707a07e0b0adb4155b95fbd32918aafba87338ab4c131f76d786cff4406c2af6bba9ef4"
  )
  .setEndpoint("https://localhost/v1");

(async function () {
  try {
    await databases.create("playground-db", "Playground Database");
    console.log("successfully created database");

    await databases.createCollection(
      "playground-db",
      "playground-collection",
      "Playground Collection",
      [
        sdk.Permission.create("any"),
        sdk.Permission.read("any"),
        sdk.Permission.update("any"),
        sdk.Permission.delete("any"),
      ]
    );
    console.log("successfully created collection");

    await databases.createBooleanAttribute(
      "playground-db",
      "playground-collection",
      "completed",
      true
    );
    console.log("successfully created completed attribute");

    await databases.createStringAttribute(
      "playground-db",
      "playground-collection",
      "text",
      255,
      true,
      "",
      false
    );
    console.log("successfully created text attribute");

    await storage.createBucket("playground-bucket", "Playground Bucket", [
      sdk.Permission.create("any"),
      sdk.Permission.read("any"),
      sdk.Permission.update("any"),
      sdk.Permission.delete("any"),
    ]);
    console.log("successfully created playground-bucket");
  } catch (error) {
    console.log("error", error.type, error.message);
  }
})();
