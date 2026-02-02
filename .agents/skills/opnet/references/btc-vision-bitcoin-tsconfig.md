# @btc-vision/bitcoin TypeScript Configuration

## tsconfig.base.json
```json
{
    "compilerOptions": {
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "strictFunctionTypes": true,
        "strictBindCallApply": true,
        "strictPropertyInitialization": true,
        "noImplicitThis": true,
        "useUnknownInCatchVariables": true,
        "alwaysStrict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "exactOptionalPropertyTypes": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        "noUncheckedIndexedAccess": true,
        "noImplicitOverride": true,
        "noPropertyAccessFromIndexSignature": true,
        "module": "ESNext",
        "target": "ESNext",
        "lib": [
            "ESNext",
            "DOM",
            "DOM.Iterable",
            "DOM.AsyncIterable",
            "WebWorker",
            "WebWorker.AsyncIterable",
            "WebWorker.ImportScripts"
        ],
        "isolatedModules": true,
        "verbatimModuleSyntax": true,
        "esModuleInterop": true,
        "resolveJsonModule": true,
        "declaration": true,
        "declarationMap": true,
        "sourceMap": true,
        "forceConsistentCasingInFileNames": true,
        "skipLibCheck": true,
        "moduleDetection": "force",
        "incremental": true
    }
}
```

## tsconfig.json
```json
{
    "extends": "./tsconfig.base.json",
    "compilerOptions": {
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "outDir": "./build"
    },
    "include": ["src/**/*.ts", "test/**/*.ts"],
    "exclude": ["node_modules"]
}
```
