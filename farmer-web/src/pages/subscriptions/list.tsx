import { useList } from "@refinedev/core";
import {
    List,
    Card,
    Typography,
    Space,
    Tag,
    Image,
    Row,
    Col,
    Skeleton,
} from "antd";
import { useNavigation } from "@refinedev/core";
import { PlusOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export const SubscriptionList = () => {
    const { push } = useNavigation();

    const { data, isLoading } = useList({
        resource: "subscriptions",
        pagination: {
            pageSize: 10,
        },
        meta: {}, // add fields if required by backend
    });

    const plans = data?.data || [];

    console.log("here is data", data);

    // return (
    //     <List
    //         title={
    //             <div
    //                 style={{
    //                     display: "flex",
    //                     justifyContent: "space-between",
    //                     alignItems: "center",
    //                     marginBottom: 16,
    //                 }}
    //             >
    //                 <Title level={3} style={{ margin: 0 }}>
    //                     My Subscription Plans
    //                 </Title>
    //                 <button
    //                     onClick={() => push("/subscriptions/create")}
    //                     style={{
    //                         background: "#52c41a",
    //                         color: "#fff",
    //                         border: "none",
    //                         padding: "8px 16px",
    //                         borderRadius: 4,
    //                         fontWeight: 500,
    //                         cursor: "pointer",
    //                         display: "flex",
    //                         alignItems: "center",
    //                         gap: 6,
    //                     }}
    //                 >
    //                     <PlusOutlined />
    //                     Create Plan
    //                 </button>
    //             </div>
    //         }
    //         headerProps={{
    //             style: { marginBottom: 16 },
    //         }}
    //     >
    //         <Row gutter={[24, 24]}>
    //             {isLoading
    //                 ? Array.from({ length: 8 }).map((_, i) => (
    //                       <Col xs={24} sm={12} md={8} lg={6} key={i}>
    //                           <Card>
    //                               <Skeleton active />
    //                           </Card>
    //                       </Col>
    //                   ))
    //                 : plans.map((plan: any) => (
    //                       <Col xs={24} sm={12} md={8} lg={6} key={plan.id}>
    //                           <Card
    //                               hoverable
    //                               bordered
    //                               cover={
    //                                   plan.cover_image ? (
    //                                       <Image
    //                                           src={plan.cover_image}
    //                                           alt="Subscription Cover"
    //                                           height={180}
    //                                           width="100%"
    //                                           style={{
    //                                               objectFit: "cover",
    //                                               borderRadius: "8px 8px 0 0",
    //                                           }}
    //                                           preview={false}
    //                                       />
    //                                   ) : null
    //                               }
    //                               actions={[
    //                                   <a
    //                                       key="details"
    //                                       href={`/subscriptions/${plan.id}`}
    //                                   >
    //                                       View Details
    //                                   </a>,
    //                               ]}
    //                           >
    //                               <Space direction="vertical" size="small">
    //                                   <Text type="secondary">
    //                                       Plan ID: #{plan.id}
    //                                   </Text>

    //                                   <Text strong>Type:</Text>
    //                                   <Tag
    //                                       color={
    //                                           plan.subscription_plan_template_id
    //                                               ? "blue"
    //                                               : "gold"
    //                                       }
    //                                   >
    //                                       {plan.subscription_plan_template_id
    //                                           ? `Template #${plan.subscription_plan_template_id}`
    //                                           : "Custom Plan"}
    //                                   </Tag>

    //                                   <Text strong>Status:</Text>
    //                                   <Tag
    //                                       color={
    //                                           plan.is_active ? "green" : "red"
    //                                       }
    //                                   >
    //                                       {plan.is_active
    //                                           ? "Active"
    //                                           : "Inactive"}
    //                                   </Tag>
    //                               </Space>
    //                           </Card>
    //                       </Col>
    //                   ))}
    //         </Row>
    //     </List>
    // );

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 24,
                }}
            >
                <Title level={3} style={{ margin: 0 }}>
                    My Subscription Plans
                </Title>
                <button
                    onClick={() => push("/subscriptions/create")}
                    style={{
                        background: "#52c41a",
                        color: "#fff",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: 4,
                        fontWeight: 500,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                    }}
                >
                    <PlusOutlined />
                    Create Plan
                </button>
            </div>

            <Row gutter={[24, 24]}>
                {isLoading
                    ? Array.from({ length: 8 }).map((_, i) => (
                          <Col xs={24} sm={12} md={8} lg={6} key={i}>
                              <Card>
                                  <Skeleton active />
                              </Card>
                          </Col>
                      ))
                    : plans.map((plan: any) => (
                          <Col xs={24} sm={12} md={8} lg={6} key={plan.id}>
                              <Card
                                  hoverable
                                  bordered
                                  cover={
                                      plan.cover_image ? (
                                          <Image
                                              src={plan.cover_image}
                                              alt="Subscription Cover"
                                              height={180}
                                              width="100%"
                                              style={{
                                                  objectFit: "cover",
                                                  borderRadius: "8px 8px 0 0",
                                              }}
                                              preview={false}
                                          />
                                      ) : null
                                  }
                                  actions={[
                                      <a
                                          key="details"
                                          href={`/subscriptions/${plan.id}`}
                                      >
                                          View Details
                                      </a>,
                                  ]}
                              >
                                  <Space direction="vertical" size="small">
                                      <Text type="secondary">
                                          Plan ID: #{plan.id}
                                      </Text>

                                      <Text strong>Type:</Text>
                                      <Tag
                                          color={
                                              plan.subscription_plan_template_id
                                                  ? "blue"
                                                  : "gold"
                                          }
                                      >
                                          {plan.subscription_plan_template_id
                                              ? `Template #${plan.subscription_plan_template_id}`
                                              : "Custom Plan"}
                                      </Tag>

                                      <Text strong>Status:</Text>
                                      <Tag
                                          color={
                                              plan.is_active ? "green" : "red"
                                          }
                                      >
                                          {plan.is_active
                                              ? "Active"
                                              : "Inactive"}
                                      </Tag>
                                  </Space>
                              </Card>
                          </Col>
                      ))}
            </Row>
        </>
    );
};
