#!/bin/bash

ROOT=$(pwd)
WORKING_DIR=$ROOT/dist/@ngx-dummy/accordion-simple

if [[ ! -e $WORKING_DIR ]]; then
    mkdir -p $WORKING_DIR
fi

echo "Building the library..."
npm run build:prod

echo "Copying readme, license to the library destination..."
cp -ruf $ROOT/README.md $WORKING_DIR/
cp -ruf $ROOT/LICENSE $WORKING_DIR/

cd $WORKING_DIR
npm pack
npm publish --access public
