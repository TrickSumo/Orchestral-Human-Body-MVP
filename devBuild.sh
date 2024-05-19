echo "Building..."
rm -rf dist
mkdir dist
echo "Copying WASM files..."
cp -r sc_wasm/* dist/
echo "Installing Dependencies and Building React..."
cd ohb-react-app
# npm install
npm run build
cp -r ./dist/* ../dist
echo "Done!"
# echo "" >> server.js
echo "To run the server, run "nodemon server.js" in the root directory."
