#include "view_coordinates.hpp"

// <CODEGEN_COPY_TO_HEADER>
#include "../rerun_sdk_export.hpp"

// </CODEGEN_COPY_TO_HEADER>

// Uncomment for better auto-complete while editing the extension.
// #define EDIT_EXTENSION

namespace rerun {
    namespace components {

#ifdef EDIT_EXTENSION
        struct ViewCoordinatesExt {
            uint8_t coordinates[3];
#define ViewCoordinates ViewCoordinatesExt

            // <CODEGEN_COPY_TO_HEADER>

            enum ViewDir : uint8_t {
                Up = 1,
                Down = 2,
                Right = 3,
                Left = 4,
                Forward = 5,
                Back = 6,
            };

            /// Construct Vec3D from x/y/z values.
            constexpr ViewCoordinates(uint8_t axis0, uint8_t axis1, uint8_t axis2)
                : coordinates{axis0, axis1, axis2} {}

            /// Construct Vec3D from x/y/z values.
            constexpr ViewCoordinates(ViewDir axis0, ViewDir axis1, ViewDir axis2)
                : coordinates{axis0, axis1, axis2} {}

            // <BEGIN_GENERATED:declarations>
            // This section is generated by running `scripts/generate_view_coordinate_defs.py --cpp`
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates ULF;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates UFL;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates LUF;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates LFU;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates FUL;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates FLU;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates ULB;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates UBL;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates LUB;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates LBU;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates BUL;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates BLU;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates URF;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates UFR;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates RUF;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates RFU;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates FUR;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates FRU;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates URB;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates UBR;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates RUB;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates RBU;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates BUR;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates BRU;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates DLF;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates DFL;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates LDF;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates LFD;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates FDL;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates FLD;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates DLB;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates DBL;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates LDB;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates LBD;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates BDL;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates BLD;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates DRF;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates DFR;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates RDF;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates RFD;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates FDR;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates FRD;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates DRB;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates DBR;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates RDB;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates RBD;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates BDR;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates BRD;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates RIGHT_HAND_X_UP;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates RIGHT_HAND_X_DOWN;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates RIGHT_HAND_Y_UP;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates RIGHT_HAND_Y_DOWN;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates RIGHT_HAND_Z_UP;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates RIGHT_HAND_Z_DOWN;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates LEFT_HAND_X_UP;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates LEFT_HAND_X_DOWN;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates LEFT_HAND_Y_UP;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates LEFT_HAND_Y_DOWN;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates LEFT_HAND_Z_UP;
            RERUN_SDK_EXPORT static const rerun::components::ViewCoordinates LEFT_HAND_Z_DOWN;
            // <END_GENERATED:declarations>

            // </CODEGEN_COPY_TO_HEADER>
        };
#endif
        // <BEGIN_GENERATED:definitions>
        // This section is generated by running `scripts/generate_view_coordinate_defs.py --cpp`
        const ViewCoordinates ViewCoordinates::ULF = ViewCoordinates(
            rerun::components::ViewCoordinates::Up, rerun::components::ViewCoordinates::Left,
            rerun::components::ViewCoordinates::Forward
        );
        const ViewCoordinates ViewCoordinates::UFL = ViewCoordinates(
            rerun::components::ViewCoordinates::Up, rerun::components::ViewCoordinates::Forward,
            rerun::components::ViewCoordinates::Left
        );
        const ViewCoordinates ViewCoordinates::LUF = ViewCoordinates(
            rerun::components::ViewCoordinates::Left, rerun::components::ViewCoordinates::Up,
            rerun::components::ViewCoordinates::Forward
        );
        const ViewCoordinates ViewCoordinates::LFU = ViewCoordinates(
            rerun::components::ViewCoordinates::Left, rerun::components::ViewCoordinates::Forward,
            rerun::components::ViewCoordinates::Up
        );
        const ViewCoordinates ViewCoordinates::FUL = ViewCoordinates(
            rerun::components::ViewCoordinates::Forward, rerun::components::ViewCoordinates::Up,
            rerun::components::ViewCoordinates::Left
        );
        const ViewCoordinates ViewCoordinates::FLU = ViewCoordinates(
            rerun::components::ViewCoordinates::Forward, rerun::components::ViewCoordinates::Left,
            rerun::components::ViewCoordinates::Up
        );
        const ViewCoordinates ViewCoordinates::ULB = ViewCoordinates(
            rerun::components::ViewCoordinates::Up, rerun::components::ViewCoordinates::Left,
            rerun::components::ViewCoordinates::Back
        );
        const ViewCoordinates ViewCoordinates::UBL = ViewCoordinates(
            rerun::components::ViewCoordinates::Up, rerun::components::ViewCoordinates::Back,
            rerun::components::ViewCoordinates::Left
        );
        const ViewCoordinates ViewCoordinates::LUB = ViewCoordinates(
            rerun::components::ViewCoordinates::Left, rerun::components::ViewCoordinates::Up,
            rerun::components::ViewCoordinates::Back
        );
        const ViewCoordinates ViewCoordinates::LBU = ViewCoordinates(
            rerun::components::ViewCoordinates::Left, rerun::components::ViewCoordinates::Back,
            rerun::components::ViewCoordinates::Up
        );
        const ViewCoordinates ViewCoordinates::BUL = ViewCoordinates(
            rerun::components::ViewCoordinates::Back, rerun::components::ViewCoordinates::Up,
            rerun::components::ViewCoordinates::Left
        );
        const ViewCoordinates ViewCoordinates::BLU = ViewCoordinates(
            rerun::components::ViewCoordinates::Back, rerun::components::ViewCoordinates::Left,
            rerun::components::ViewCoordinates::Up
        );
        const ViewCoordinates ViewCoordinates::URF = ViewCoordinates(
            rerun::components::ViewCoordinates::Up, rerun::components::ViewCoordinates::Right,
            rerun::components::ViewCoordinates::Forward
        );
        const ViewCoordinates ViewCoordinates::UFR = ViewCoordinates(
            rerun::components::ViewCoordinates::Up, rerun::components::ViewCoordinates::Forward,
            rerun::components::ViewCoordinates::Right
        );
        const ViewCoordinates ViewCoordinates::RUF = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Up,
            rerun::components::ViewCoordinates::Forward
        );
        const ViewCoordinates ViewCoordinates::RFU = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Forward,
            rerun::components::ViewCoordinates::Up
        );
        const ViewCoordinates ViewCoordinates::FUR = ViewCoordinates(
            rerun::components::ViewCoordinates::Forward, rerun::components::ViewCoordinates::Up,
            rerun::components::ViewCoordinates::Right
        );
        const ViewCoordinates ViewCoordinates::FRU = ViewCoordinates(
            rerun::components::ViewCoordinates::Forward, rerun::components::ViewCoordinates::Right,
            rerun::components::ViewCoordinates::Up
        );
        const ViewCoordinates ViewCoordinates::URB = ViewCoordinates(
            rerun::components::ViewCoordinates::Up, rerun::components::ViewCoordinates::Right,
            rerun::components::ViewCoordinates::Back
        );
        const ViewCoordinates ViewCoordinates::UBR = ViewCoordinates(
            rerun::components::ViewCoordinates::Up, rerun::components::ViewCoordinates::Back,
            rerun::components::ViewCoordinates::Right
        );
        const ViewCoordinates ViewCoordinates::RUB = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Up,
            rerun::components::ViewCoordinates::Back
        );
        const ViewCoordinates ViewCoordinates::RBU = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Back,
            rerun::components::ViewCoordinates::Up
        );
        const ViewCoordinates ViewCoordinates::BUR = ViewCoordinates(
            rerun::components::ViewCoordinates::Back, rerun::components::ViewCoordinates::Up,
            rerun::components::ViewCoordinates::Right
        );
        const ViewCoordinates ViewCoordinates::BRU = ViewCoordinates(
            rerun::components::ViewCoordinates::Back, rerun::components::ViewCoordinates::Right,
            rerun::components::ViewCoordinates::Up
        );
        const ViewCoordinates ViewCoordinates::DLF = ViewCoordinates(
            rerun::components::ViewCoordinates::Down, rerun::components::ViewCoordinates::Left,
            rerun::components::ViewCoordinates::Forward
        );
        const ViewCoordinates ViewCoordinates::DFL = ViewCoordinates(
            rerun::components::ViewCoordinates::Down, rerun::components::ViewCoordinates::Forward,
            rerun::components::ViewCoordinates::Left
        );
        const ViewCoordinates ViewCoordinates::LDF = ViewCoordinates(
            rerun::components::ViewCoordinates::Left, rerun::components::ViewCoordinates::Down,
            rerun::components::ViewCoordinates::Forward
        );
        const ViewCoordinates ViewCoordinates::LFD = ViewCoordinates(
            rerun::components::ViewCoordinates::Left, rerun::components::ViewCoordinates::Forward,
            rerun::components::ViewCoordinates::Down
        );
        const ViewCoordinates ViewCoordinates::FDL = ViewCoordinates(
            rerun::components::ViewCoordinates::Forward, rerun::components::ViewCoordinates::Down,
            rerun::components::ViewCoordinates::Left
        );
        const ViewCoordinates ViewCoordinates::FLD = ViewCoordinates(
            rerun::components::ViewCoordinates::Forward, rerun::components::ViewCoordinates::Left,
            rerun::components::ViewCoordinates::Down
        );
        const ViewCoordinates ViewCoordinates::DLB = ViewCoordinates(
            rerun::components::ViewCoordinates::Down, rerun::components::ViewCoordinates::Left,
            rerun::components::ViewCoordinates::Back
        );
        const ViewCoordinates ViewCoordinates::DBL = ViewCoordinates(
            rerun::components::ViewCoordinates::Down, rerun::components::ViewCoordinates::Back,
            rerun::components::ViewCoordinates::Left
        );
        const ViewCoordinates ViewCoordinates::LDB = ViewCoordinates(
            rerun::components::ViewCoordinates::Left, rerun::components::ViewCoordinates::Down,
            rerun::components::ViewCoordinates::Back
        );
        const ViewCoordinates ViewCoordinates::LBD = ViewCoordinates(
            rerun::components::ViewCoordinates::Left, rerun::components::ViewCoordinates::Back,
            rerun::components::ViewCoordinates::Down
        );
        const ViewCoordinates ViewCoordinates::BDL = ViewCoordinates(
            rerun::components::ViewCoordinates::Back, rerun::components::ViewCoordinates::Down,
            rerun::components::ViewCoordinates::Left
        );
        const ViewCoordinates ViewCoordinates::BLD = ViewCoordinates(
            rerun::components::ViewCoordinates::Back, rerun::components::ViewCoordinates::Left,
            rerun::components::ViewCoordinates::Down
        );
        const ViewCoordinates ViewCoordinates::DRF = ViewCoordinates(
            rerun::components::ViewCoordinates::Down, rerun::components::ViewCoordinates::Right,
            rerun::components::ViewCoordinates::Forward
        );
        const ViewCoordinates ViewCoordinates::DFR = ViewCoordinates(
            rerun::components::ViewCoordinates::Down, rerun::components::ViewCoordinates::Forward,
            rerun::components::ViewCoordinates::Right
        );
        const ViewCoordinates ViewCoordinates::RDF = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Down,
            rerun::components::ViewCoordinates::Forward
        );
        const ViewCoordinates ViewCoordinates::RFD = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Forward,
            rerun::components::ViewCoordinates::Down
        );
        const ViewCoordinates ViewCoordinates::FDR = ViewCoordinates(
            rerun::components::ViewCoordinates::Forward, rerun::components::ViewCoordinates::Down,
            rerun::components::ViewCoordinates::Right
        );
        const ViewCoordinates ViewCoordinates::FRD = ViewCoordinates(
            rerun::components::ViewCoordinates::Forward, rerun::components::ViewCoordinates::Right,
            rerun::components::ViewCoordinates::Down
        );
        const ViewCoordinates ViewCoordinates::DRB = ViewCoordinates(
            rerun::components::ViewCoordinates::Down, rerun::components::ViewCoordinates::Right,
            rerun::components::ViewCoordinates::Back
        );
        const ViewCoordinates ViewCoordinates::DBR = ViewCoordinates(
            rerun::components::ViewCoordinates::Down, rerun::components::ViewCoordinates::Back,
            rerun::components::ViewCoordinates::Right
        );
        const ViewCoordinates ViewCoordinates::RDB = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Down,
            rerun::components::ViewCoordinates::Back
        );
        const ViewCoordinates ViewCoordinates::RBD = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Back,
            rerun::components::ViewCoordinates::Down
        );
        const ViewCoordinates ViewCoordinates::BDR = ViewCoordinates(
            rerun::components::ViewCoordinates::Back, rerun::components::ViewCoordinates::Down,
            rerun::components::ViewCoordinates::Right
        );
        const ViewCoordinates ViewCoordinates::BRD = ViewCoordinates(
            rerun::components::ViewCoordinates::Back, rerun::components::ViewCoordinates::Right,
            rerun::components::ViewCoordinates::Down
        );
        const ViewCoordinates ViewCoordinates::RIGHT_HAND_X_UP = ViewCoordinates(
            rerun::components::ViewCoordinates::Up, rerun::components::ViewCoordinates::Right,
            rerun::components::ViewCoordinates::Forward
        );
        const ViewCoordinates ViewCoordinates::RIGHT_HAND_X_DOWN = ViewCoordinates(
            rerun::components::ViewCoordinates::Down, rerun::components::ViewCoordinates::Right,
            rerun::components::ViewCoordinates::Back
        );
        const ViewCoordinates ViewCoordinates::RIGHT_HAND_Y_UP = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Up,
            rerun::components::ViewCoordinates::Back
        );
        const ViewCoordinates ViewCoordinates::RIGHT_HAND_Y_DOWN = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Down,
            rerun::components::ViewCoordinates::Forward
        );
        const ViewCoordinates ViewCoordinates::RIGHT_HAND_Z_UP = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Forward,
            rerun::components::ViewCoordinates::Up
        );
        const ViewCoordinates ViewCoordinates::RIGHT_HAND_Z_DOWN = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Back,
            rerun::components::ViewCoordinates::Down
        );
        const ViewCoordinates ViewCoordinates::LEFT_HAND_X_UP = ViewCoordinates(
            rerun::components::ViewCoordinates::Up, rerun::components::ViewCoordinates::Right,
            rerun::components::ViewCoordinates::Back
        );
        const ViewCoordinates ViewCoordinates::LEFT_HAND_X_DOWN = ViewCoordinates(
            rerun::components::ViewCoordinates::Down, rerun::components::ViewCoordinates::Right,
            rerun::components::ViewCoordinates::Forward
        );
        const ViewCoordinates ViewCoordinates::LEFT_HAND_Y_UP = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Up,
            rerun::components::ViewCoordinates::Forward
        );
        const ViewCoordinates ViewCoordinates::LEFT_HAND_Y_DOWN = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Down,
            rerun::components::ViewCoordinates::Back
        );
        const ViewCoordinates ViewCoordinates::LEFT_HAND_Z_UP = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Back,
            rerun::components::ViewCoordinates::Up
        );
        const ViewCoordinates ViewCoordinates::LEFT_HAND_Z_DOWN = ViewCoordinates(
            rerun::components::ViewCoordinates::Right, rerun::components::ViewCoordinates::Forward,
            rerun::components::ViewCoordinates::Down
        );
        // <END_GENERATED:definitions>

    } // namespace components
} // namespace rerun
